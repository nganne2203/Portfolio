import type { Metadata } from "next";
import { PortfolioPage } from "@/app/page";

export const metadata: Metadata = {
  title: "Mai Thi Thanh Ngan | Full-stack & Mobile Developer",
  description:
    "Portfolio of Mai Thi Thanh Ngan, a Software Engineering student and Full-stack & Mobile Developer experienced with React, Flutter, and Node.js.",
};

export default function EnglishPortfolioPage() {
  return <PortfolioPage locale="en" />;
}
