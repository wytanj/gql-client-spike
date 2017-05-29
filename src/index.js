import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'

import App from './App'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://graphql-api-xuhgjxoaiw.now.sh' })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,
  document.getElementById('root')
)
