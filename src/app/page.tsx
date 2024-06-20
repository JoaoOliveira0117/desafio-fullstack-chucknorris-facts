'use client';
import Input from './components/Input';
import Button from './components/Button';
import Text from './components/Text';
import Form from './components/Form';
import { useState } from 'react';

export default function Home() {
  const [apiResponse, setApiResponse] = useState<[]>([]);

  const handleSubmit = (values: Record<string, string>) => {
    const body = values as { search: string };
    console.log(body);

    fetch(`https://api.chucknorris.io/jokes/search?query=${body.search}`)
      .then((res) => res.json())
      .then((res) => setApiResponse(res.result.slice(0, 5)));
  };

  return (
    <div>
      <Form handleSubmit={handleSubmit}>
        <Input type="text" name="search" placeholder="🔎 Search a fact" />
        <Button className="block" type="submit">
          <Text>Search!</Text>
        </Button>
      </Form>
      <div className="max-w-2xl">
        {apiResponse.map((item: any) => (
          <Text variant="h6" className="py-2" key={item.id}>
            {item.value}
          </Text>
        ))}
      </div>
    </div>
  );
}
