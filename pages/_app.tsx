import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/vars.css";
import { Josefin_Sans } from "@next/font/google";
import { CardContext } from "@/store/CardContext";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={josefin_sans.className}>
      <CardContext.Provider value={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CardContext.Provider>
    </main>
  );
}
