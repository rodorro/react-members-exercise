import { generatePath } from 'react-router';

interface Routes {
  root: string;
  membersCollection: string;
  memberEdit: string;
}

export const routes: Routes = {
  root: '/',
  membersCollection: '/members',
  memberEdit: '/members/:id',
};

export const linkRoutes = {
  ...routes,
  memberEdit: id => generatePath(routes.memberEdit, { id }),
};

// type NavigationFunction = (id: string) => string;

// interface LinkRoutes extends Omit<SwitchRoutes, 'member'> {
//   member: NavigationFunction;
// }

// export const linkRoutes: LinkRoutes = {
//   ...switchRoutes,
//   member: id => generatePath(switchRoutes.member, { id }),
// };