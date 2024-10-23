export interface UserInfo {
  userName: string | null;
  isAuth: boolean;
}

export interface UserInfoContextType {
  user: UserInfo | null;
  saveUser: (user: UserInfo) => void;
}
