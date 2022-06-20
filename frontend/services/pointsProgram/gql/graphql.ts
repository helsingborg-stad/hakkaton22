import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useEffect, useState } from "react";

export function useThis() {
  const [client, setClient] =
    useState<ApolloClient<NormalizedCacheObject> | null>(null);

  useEffect(() => {
    const newClient = new ApolloClient({
      uri: "asdasd",
      cache: new InMemoryCache(),
    });

    setClient(newClient);
  }, []);
}
