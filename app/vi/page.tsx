import type { Metadata } from "next";
import { PortfolioPage } from "@/app/page";

export const metadata: Metadata = {
  title: "Mai Thị Thanh Ngân | Full-stack & Mobile Developer",
  description:
    "Portfolio của Mai Thị Thanh Ngân — sinh viên Kỹ thuật Phần mềm, Full-stack & Mobile Developer với kinh nghiệm React, Flutter và Node.js.",
};

export default function VietnamesePortfolioPage() {
  return <PortfolioPage locale="vi" />;
}
