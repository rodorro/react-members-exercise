import React from "react";
import { useMembersCollection } from "../../hooks/use-members-collection.hook";
import { useHistory } from "react-router-dom";
import { MemberCollectionComponent } from "./member-collection.component";
import { linkRoutes } from "../../core/router";
import { SessionContext } from "../../core/session.context";

export const MemberCollectionContainer = () => {
  const sessionContext = React.useContext(SessionContext);

  const {
    membersCollection,
    getMembersCollection,
    hashMoreElements
  } = useMembersCollection();
  const [organization, setOrganization] = React.useState<string>(
    sessionContext.organization
  );
  const history = useHistory();
  const [page, setPage] = React.useState(1);
  const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(() => {
    setIsFetching(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!isFetching) return;
    if (!hashMoreElements) {
      setIsFetching(false);
      return;
    }
    getMembersCollection(organization, page, page === 1);
    setIsFetching(false);
    setPage(page + 1);
  }, [isFetching]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  };

  const handleLoadMembers = (organization: string) => {
    setOrganization(organization);
    sessionContext.onUpdateOrganization(organization);
    getMembersCollection(organization, 1, true);
    setPage(2);
  };

  const handleMemberEdit = (id: number) => {
    const route = linkRoutes.memberEdit(id);
    history.push(route);
  };

  return (
    <>
      <MemberCollectionComponent
        organization={organization}
        members={membersCollection}
        onLoadMembers={handleLoadMembers}
        onMemberEdit={handleMemberEdit}
      />
      {/* {isFetching && hashMoreElements && "Fetching more list items..."} */}
    </>
  );
};
