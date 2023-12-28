import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {createUploadLink} from "apollo-upload-client"
import { Provider } from 'react-redux';
import store from './redux/store/store';

const link= createUploadLink({
  uri:'http://localhost:1337/graphql'
})

const client = new ApolloClient({
link,
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </Provider>,
);


