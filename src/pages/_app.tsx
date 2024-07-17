import { useEffect } from "react";
import "../app/globals.css";
import { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
