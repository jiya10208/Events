// import '@/styles/globals.css'

import Layout from "@/components/layout/layout";
import MainHeader from "@/components/layout/main-header";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
