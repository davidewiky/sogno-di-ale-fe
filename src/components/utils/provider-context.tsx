"use client";

import { createContext, useEffect, useState } from "react";
import type { UserInfo, UserInfoContextType } from "~/types/user-info";

export const UserInfoContext = createContext<UserInfoContextType | null>(null);

export function UserInfoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userInfoInit, setUserInfoInit] = useState<UserInfo>({
    userName: null,
  });
  const saveNewUser = (userInfo: UserInfo) => {
    const newUser = {
      userName: userInfo.userName,
    };
    localStorage.setItem("isAuth", String(userInfo.userName !== null));
    setUserInfoInit(newUser);
  };

  useEffect(() => {
    localStorage.setItem("isAuth", String(userInfoInit.userName !== null));
  }, [userInfoInit]);

  return (
    <UserInfoContext.Provider
      value={{ user: userInfoInit, saveUser: saveNewUser }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}
