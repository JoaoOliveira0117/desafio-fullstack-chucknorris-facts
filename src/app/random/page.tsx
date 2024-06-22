import Api from '@/http/api';
import FactsWrapper from '../components/FactsWrapper';
import PageWrapper from '../components/PageWrapper';

export default async function Random() {
  const { data } = await new Api().getRandomFact();
  console.log(data);

  return (
    <PageWrapper>
      <FactsWrapper facts={[data.fact]} />
    </PageWrapper>
  );
}
