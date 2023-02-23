import Footer from "./Footer";
import { NavCard } from "./NavCard/NavCard";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavCard />
      <main>{children}</main>
      <Footer />
    </>
  );
}
