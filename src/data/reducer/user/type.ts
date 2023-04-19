export interface UserState {
  username: string;
  email: string;
  token: string;
  image: string;
}

export const initialUserState: UserState = {
  image: '',
  username: '',
  email: '',
  token: '',
};
