import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NuqsAdapter>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div>
            <Component {...pageProps} />
          </div>
          <Footer />
        </ThemeProvider>
      </NuqsAdapter>
    </div>
  );
}
