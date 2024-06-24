'use client';
import { useState } from 'react';
import PageWrapper from './components/PageWrapper';
import SearchForm from './components/SearchForm';
import FactsWrapper from './components/FactsWrapper';
import { ApolloProvider } from '@apollo/client';
import client from '@/http/apolloClient';

export default function Home() {
  const [apiResponse, setApiResponse] = useState<Fact[]>([]);
  const [fetched, setFetched] = useState(false);

  const handleResult = (result: Fact[]) => {
    setApiResponse(result);
    setFetched(true);
  };

  return (
    <ApolloProvider client={client}>
      <PageWrapper>
        <SearchForm onResult={handleResult} />
        <FactsWrapper facts={apiResponse} fetched={fetched} />
      </PageWrapper>
    </ApolloProvider>
  );
}
