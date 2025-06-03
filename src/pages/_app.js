import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <NuqsAdapter>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </NuqsAdapter>
    </div>
  );
}
