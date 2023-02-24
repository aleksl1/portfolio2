import { CardContext } from "@/store/CardContext";
import { useState } from "react";
import Footer from "./Footer";
import { NavCard } from "./NavCard/NavCard";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const [cardHidden, setCardHidden] = useState(false);
  const handleCardAction = (value: boolean) => setCardHidden(value);

  return (
    <CardContext.Provider
      value={{ cardState: cardHidden, setCardState: () => setCardHidden }}
    >
      <main>
        <NavCard handleCardAction={handleCardAction} />
        {children}
        <Footer />
      </main>
    </CardContext.Provider>
  );
}
