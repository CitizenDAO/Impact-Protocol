import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';
import './index.css';

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const prevTheme = window.localStorage.getItem('theme');

const subgraphUri = 'http://localhost:8000/subgraphs/name/scaffold-eth/your-contract';

const client = new ApolloClient({
  uri: subgraphUri,
  cache: new InMemoryCache(),
});

const store = configureStore();

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme || 'light'}>
      <Provider store={store}>
        <App subgraphUri={subgraphUri} />
      </Provider>
    </ThemeSwitcherProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
