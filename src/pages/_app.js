import { GlobalProvider } from "@/context/global";
import "@/style/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}
