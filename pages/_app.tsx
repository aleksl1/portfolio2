import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/vars.css";
import { Josefin_Sans } from "@next/font/google";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={josefin_sans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
