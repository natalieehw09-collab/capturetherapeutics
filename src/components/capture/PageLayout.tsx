import { ReactNode } from "react";
import Navbar from "@/components/capture/Navbar";
import Footer from "@/components/capture/Footer";
import Chatbot from "@/components/capture/Chatbot";

type Props = {
  children: ReactNode;
  hideChatbot?: boolean;
};

const PageLayout = ({ children, hideChatbot }: Props) => (
  <div id="top" className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    {!hideChatbot && <Chatbot />}
  </div>
);

export default PageLayout;
