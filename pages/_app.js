import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}

export default MyApp;


//Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around 
//our application in src/index.js. 
//Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop: