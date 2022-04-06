import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AppRoot from './src/AppRoot';
import Config from './src/config';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: Config.BASE_URL,
  cache: new InMemoryCache()
});

const App = (props) => {
  return (
    <ApolloProvider client={client}>
      <View style={{ flex: 1 }}>
        <AppRoot />
      </View>
    </ApolloProvider>
  );
};

export default App;
