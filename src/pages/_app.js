import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/mixins/index.scss";
import "atropos/css";

import Wrapper from "@/components/wrapper";
import { AppProvider } from "../context/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </AppProvider>
  );
}
