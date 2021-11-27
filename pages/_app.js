import "../styles/globals.css";
import Layout from "./components/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import "../styles/custom.css";

function MyApp({ Component, pageProps }) {
  return Component.Layout ? (
    <Layout>
      <Component.Layout>
        <Component {...pageProps} />
      </Component.Layout>
    </Layout>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
