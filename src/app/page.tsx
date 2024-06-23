'use client';
import { useState } from 'react';
import PageWrapper from './components/PageWrapper';
import SearchForm from './components/SearchForm';
import FactsWrapper from './components/FactsWrapper';
import { ApolloProvider } from '@apollo/client';
import client from '@/http/apolloClient';

export default function Home() {
  const [apiResponse, setApiResponse] = useState<Fact[]>([]);

  return (
    <ApolloProvider client={client}>
      <PageWrapper>
        <SearchForm onResult={setApiResponse} />
        <FactsWrapper facts={apiResponse} />
      </PageWrapper>
    </ApolloProvider>
  );
}
