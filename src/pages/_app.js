import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
