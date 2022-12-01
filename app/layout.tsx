import "./globals.css";
import { Wrapper } from "@comps/Layouts";
import UserMenu from "@comps/UserOptions";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <UserMenu />
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
