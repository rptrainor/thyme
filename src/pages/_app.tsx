import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
// import Head from "next/head";
// import type { AppProps } from "next/app";
import type { AppType } from 'next/dist/shared/lib/utils';
import { trpc } from '../utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
