import Text from '../components/Text';

const getJokeById = (id: string) => {
  return fetch('https://api.chucknorris.io/jokes/' + id)
    .then((res) => res.json())
    .then((res) => res.value);
};

export default function Id({ params }: { params: { id: string } }) {
  const joke = getJokeById(params.id);

  return (
    <div>
      <div className="max-w-2xl">
        <Text variant="h6" className="py-2">
          {joke}
        </Text>
      </div>
    </div>
  );
}
