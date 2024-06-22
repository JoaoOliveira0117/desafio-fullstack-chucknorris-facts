import FactsWrapper from '../components/FactsWrapper';
import PageWrapper from '../components/PageWrapper';

const getRandomFact = () => {
  return fetch('https://api.chucknorris.io/jokes/random?category=dev', { cache: 'no-cache' })
    .then((res) => res.json())
    .then((res) => res as Fact);
};

export default async function Random() {
  const fact = await getRandomFact();

  return (
    <PageWrapper>
      <FactsWrapper facts={[fact]} />
    </PageWrapper>
  );
}
