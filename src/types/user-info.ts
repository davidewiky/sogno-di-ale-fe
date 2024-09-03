export interface UserInfo {
  userName: string | null;
  privateRsa?: string | null;
  aes?: string | null;
}

export interface UserInfoContextType {
  user: UserInfo | null;
  saveUser: (user: UserInfo) => void;
}
