'use client';
import { FC, useCallback, useEffect, useState } from 'react';
import FactsWrapper from './FactsWrapper';
import Api from '@/http/api';

const RandomFactsWrapper: FC = () => {
  const [fact, setFact] = useState<Fact>();

  const getRandomFact = useCallback(async () => await new Api().getRandomFact(), []);

  useEffect(() => {
    getRandomFact().then((res) => {
      setFact(res.data.fact);
    });
  }, [getRandomFact]);

  if (!fact) {
    return null;
  }

  return <FactsWrapper facts={[fact]} />;
};

export default RandomFactsWrapper;
