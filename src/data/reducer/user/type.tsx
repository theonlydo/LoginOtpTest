export interface UserState {
  name: string;
  email: string;
  accessToken: string;
  image: string;
}

export const initialUserState: UserState = {
  image: '',
  name: '',
  email: '',
  accessToken: '',
};

export const transformUserData = (res: any) => {
  return {
    name: res?.firstName,
    image: res?.image,
    email: res?.email,
    accessToken: res?.password,
  };
};
