import React from 'react';
import { useMembersCollection } from '../../hooks/use-members-collection.hook';
import { useHistory } from 'react-router-dom';
import { MembersTableComponent } from './membersTable';
import { routes, linkRoutes } from '../../core/router';

export const MemberCollectionContainer = () => {

    const { membersCollection, getMembersCollection } = useMembersCollection();
    const [organization, setOrganization] = React.useState<string>("lemoncode");
    const [initialized, setInitialized] = React.useState(false);
    const history = useHistory();

    React.useEffect(() => {
        getMembersCollection(organization);
        setInitialized(true);
    }, [initialized]);

    const handleMemberEdit = (id: number) => {
        const route = linkRoutes.memberEdit(id);
        history.push(route);
    }    
  
    return (
      <MembersTableComponent organization={organization} members={membersCollection} 
        onLoadMembers={getMembersCollection} onMemberEdit={handleMemberEdit}/>
    );
  };