import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fanplay",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon/fanplayFavicon.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}