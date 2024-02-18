"use client"

import { setContext } from "@apollo/client/link/context"
import { ApolloClient, InMemoryCache } from "@apollo/client"

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token")
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": "*",
    },
  }
})

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/api/graphql`,
  cache: new InMemoryCache(),
})

export default client
