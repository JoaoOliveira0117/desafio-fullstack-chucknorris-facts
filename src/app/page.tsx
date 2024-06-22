'use client';
import { useState } from 'react';
import PageWrapper from './components/PageWrapper';
import SearchForm from './components/SearchForm';
import FactsWrapper from './components/FactsWrapper';

export default function Home() {
  const [apiResponse, setApiResponse] = useState<[]>([]);

  return (
    <PageWrapper>
      <SearchForm onResult={setApiResponse} />
      <FactsWrapper facts={apiResponse} />
    </PageWrapper>
  );
}
