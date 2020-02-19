import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  membersTable: string;
  member: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  membersTable: '/membersTable',
  member: '/member/:id',
};

// type NavigationFunction = (id: string) => string;

// interface LinkRoutes extends Omit<SwitchRoutes, 'member'> {
//   member: NavigationFunction;
// }

// export const linkRoutes: LinkRoutes = {
//   ...switchRoutes,
//   member: id => generatePath(switchRoutes.member, { id }),
// };