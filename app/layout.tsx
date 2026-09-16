import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mai Thị Thanh Ngân | Full-stack & Mobile Developer",
  description:
    "Portfolio của Mai Thị Thanh Ngân — sinh viên Kỹ thuật Phần mềm, Full-stack & Mobile Developer với kinh nghiệm React, Flutter và Node.js.",
  keywords: [
    "Mai Thị Thanh Ngân",
    "Software Engineer",
    "Full-stack Developer",
    "Mobile Developer",
    "React",
    "Flutter",
    "Node.js",
  ],
  authors: [{ name: "Mai Thị Thanh Ngân" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
