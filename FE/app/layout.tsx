import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ONE THING todo app",
  description: "오늘 가장 중요한 할일을 관리해 보세요",
  keywords: ["one thing", "todo"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
