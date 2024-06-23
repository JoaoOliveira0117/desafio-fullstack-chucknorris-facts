import { FC, useState } from 'react';
import Form from './dummies/Form';
import SearchInput from './SearchInput';
import { gql } from '@apollo/client';
import client from '@/http/apolloClient';

const GET_FACTS_BY_QUERY = gql`
  query GetFactsByQuery($search: String!) {
    factsByQuery(search: $search) {
      id
      value
      categories
    }
  }
`;

type factsByQueryType = {
  factsByQuery: Fact[];
};

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

    const result = await (
      await client.query
    )<factsByQueryType>({
      query: GET_FACTS_BY_QUERY,
      variables: { search: body.search },
    });

    onResult(result.data.factsByQuery);
  };

  return (
    <Form handleSubmit={handleSubmit} className="w-full px-4 flex flex-col">
      <SearchInput shake={shake} />
    </Form>
  );
};

export default SearchForm;
