export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
  company: string;
}

export const createDefaultMemberEntity = () => ({
  id: 0,
  login: '',
  avatar_url: '',
  company: ''
});
