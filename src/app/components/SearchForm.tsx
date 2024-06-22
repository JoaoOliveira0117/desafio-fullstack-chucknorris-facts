import { FC, useState } from 'react';
import Form from './dummies/Form';
import SearchInput from './SearchInput';
import Api from '@/http/api';

type SearchFormProps = {
  onResult: (result: Fact[]) => void;
};

const SearchForm: FC<SearchFormProps> = ({ onResult }) => {
  const [shake, setShake] = useState(false);

  const handleSubmit = async (values: Record<string, string>) => {
    const body = values as { search: string };
    if (!body.search) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const { data } = await new Api().getFactsBySearchQuery(body.search);
    onResult(data.fact);
  };

  return (
    <Form handleSubmit={handleSubmit} className="w-full px-4 flex flex-col">
      <SearchInput shake={shake} />
    </Form>
  );
};

export default SearchForm;
