import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/mixins/index.scss";
import "atropos/css";

import Script from "next/script";
import Wrapper from "@/components/wrapper";
import { AppProvider } from "../context/AppContext";
import SmoothScroll from "@/components/smoothScroll";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EDF2S4J7XT" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EDF2S4J7XT');
        `}
      </Script>
      <AppProvider>
        <SmoothScroll />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </AppProvider>
    </>
  );
}
