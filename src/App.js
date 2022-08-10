import Routers from './navigation/Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from './ThemeProvider'
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { store } from '../src/store';
import { Provider } from 'react-redux';
import { saveState } from "../src/utility/browser-storage";
import { debounce } from "debounce";
import Config from "./common/Config";
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, gql } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
//   uri: Config.liveScoreApiURL
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('rs-token');
//   return {
//     headers: {
//       ...headers,
//       'rs-token': token ? `${token}` : "v5sRS_P_1546828966243995659s1552578803790911827",
//     }
//   }
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

store.subscribe(
  debounce(() => {
    saveState('redux', store.getState());
  }, 800)
);

function App() {
  return (
    <Provider store={store}>
      {/* <ApolloProvider client={client}> */}
        <ThemeProvider>
          <I18nextProvider i18n={i18n}>
            <ToastContainer />
            <Routers />
          </I18nextProvider>
        </ThemeProvider>
      {/* </ApolloProvider> */}
    </Provider>
  );
}
export default App;