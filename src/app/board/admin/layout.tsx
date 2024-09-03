"use client";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>Layout di edit da mettere un routeguard </div>
      {children}
    </>
  );
}
