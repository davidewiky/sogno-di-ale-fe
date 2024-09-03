"use client";

import { createContext, useState } from "react";
import type { UserInfo, UserInfoContextType } from "~/types/user-info";

export const UserInfoContext = createContext<UserInfoContextType | null>(null);

export function UserInfoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userInfoInit, setUserInfoInit] = useState<UserInfo>({
    userName: null,
    privateRsa: null,
    aes: null,
  });
  const saveNewUser = (userInfo: UserInfo) => {
    const newUser = {
      aes: userInfo.aes,
      privateRsa: userInfo.privateRsa,
      userName: userInfo.userName,
    };
    setUserInfoInit(newUser);
  };

  return (
    <UserInfoContext.Provider
      value={{ user: userInfoInit, saveUser: saveNewUser }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}
