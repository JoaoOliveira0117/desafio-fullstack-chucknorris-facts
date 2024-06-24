import Api from '@/http/api';
import FactsWrapper from '../components/FactsWrapper';
import PageWrapper from '../components/PageWrapper';
export default async function Id({ params }: { params: { id: string } }) {
  const { data } = await new Api().getFactById(params.id);
  const fact = data.fact.value ? [data.fact] : [];

  return (
    <PageWrapper>
      <FactsWrapper facts={fact} fetched />
    </PageWrapper>
  );
}
