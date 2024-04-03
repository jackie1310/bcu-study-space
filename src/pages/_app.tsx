import { AppProps, type AppType } from "next/app";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/configstore";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ 
  Component, 
  pageProps: { session, ...pageProps }, } : AppProps) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <main className={`font-sans ${inter.variable}`}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
