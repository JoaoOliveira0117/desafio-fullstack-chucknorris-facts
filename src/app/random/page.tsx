import Text from '../components/Text';

const getRandomJoke = () => {
  return fetch('https://api.chucknorris.io/jokes/random?category=dev', { cache: 'no-cache' })
    .then((res) => res.json())
    .then((res) => res.value);
};

export default function Random() {
  const joke = getRandomJoke();

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
