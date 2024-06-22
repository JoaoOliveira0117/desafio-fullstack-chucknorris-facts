type FactApiResponse<T> = {
  data: {
    fact: T;
  };
};

type Fact = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

type SearchFormValues = {
  search: string;
};
