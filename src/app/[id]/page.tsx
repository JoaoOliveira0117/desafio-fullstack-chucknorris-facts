import Api from '@/http/api';
import FactsWrapper from '../components/FactsWrapper';
import PageWrapper from '../components/PageWrapper';
export default async function Id({ params }: { params: { id: string } }) {
  const { data } = await new Api().getFactById(params.id);

  return (
    <PageWrapper>
      <FactsWrapper facts={[data.fact]} />
    </PageWrapper>
  );
}
