import FactsWrapper from '../components/FactsWrapper';
import PageWrapper from '../components/PageWrapper';

const getFactById = (id: string) => {
  return fetch('https://api.chucknorris.io/jokes/' + id)
    .then((res) => res.json())
    .then((res) => res as Fact);
};

export default async function Id({ params }: { params: { id: string } }) {
  const fact = await getFactById(params.id);

  return (
    <PageWrapper>
      <FactsWrapper facts={[fact]} />
    </PageWrapper>
  );
}
