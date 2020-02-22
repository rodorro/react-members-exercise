import React from 'react';
import { useMembersCollection } from '../../hooks/use-members-collection.hook';
import { useHistory } from 'react-router-dom';
import { MemberCollectionComponent } from './member-collection.component';
import { routes, linkRoutes } from '../../core/router';
import { SessionContext } from '../../core/session.context';

export const MemberCollectionContainer = () => {
  
  const sessionContext = React.useContext(SessionContext);

  const { membersCollection, getMembersCollection } = useMembersCollection();
  const [organization, setOrganization] = React.useState<string>(sessionContext.organization);
  const [initialized, setInitialized] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
      getMembersCollection(organization);
      setInitialized(true);
  }, [initialized]);

  const handleLoadMembers = (organization: string) => {
    sessionContext.onUpdateOrganization(organization);
    getMembersCollection(organization);
  }

  const handleMemberEdit = (id: number) => {
      const route = linkRoutes.memberEdit(id);
      history.push(route);
  }    

  return (
    <MemberCollectionComponent organization={organization} members={membersCollection} 
      onLoadMembers={handleLoadMembers} onMemberEdit={handleMemberEdit}/>
  );
};