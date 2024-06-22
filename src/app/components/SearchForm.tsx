import { FC, useState } from 'react';
import Form from './dummies/Form';
import SearchInput from './SearchInput';

type SearchFormProps = {
  onResult: (result: any) => void;
};

const SearchForm: FC<SearchFormProps> = ({ onResult }) => {
  const [shake, setShake] = useState(false);

  const handleSubmit = (values: Record<string, string>) => {
    const body = values as { search: string };
    if (!body.search) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    fetch(`https://api.chucknorris.io/jokes/search?query=${body.search}`, { cache: 'force-cache' })
      .then((res) => res.json())
      .then((res) => onResult(res.result.slice(0, 5)));
  };

  return (
    <Form handleSubmit={handleSubmit} className="w-full px-4 flex flex-col">
      <SearchInput shake={shake} />
    </Form>
  );
};

export default SearchForm;
