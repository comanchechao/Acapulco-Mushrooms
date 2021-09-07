import "../styles/globals.css";
import ReactDOM from "react-dom";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
 
}

export default MyApp;
