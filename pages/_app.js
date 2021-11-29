import "../styles/globals.css";
import Layout from "../components/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.css";
import { Provider } from "react-redux";
import { reducers } from "../Redux/Reducers/combinedReducer";
import { createStore } from "redux";
const store = createStore(reducers);

function MyApp({ Component, pageProps }) {
  return Component.Layout ? (
    <Provider store={store}>
      <Layout>
        <Component.Layout>
          <Component {...pageProps} />
        </Component.Layout>
      </Layout>
    </Provider>
  ) : (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
