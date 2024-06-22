import { FC } from 'react';
import Input from './dummies/Input';
import Button from './dummies/Button';
import SearchIcon from './icons/search';

type SearchInputProps = {
  shake?: boolean;
};

const SearchInput: FC<SearchInputProps> = ({ shake }) => {
  return (
    <div className={`bg-white w-full flex px-2 rounded-lg ${shake ? 'animate-shake' : ''}`}>
      <label htmlFor="search" className="w-fit h-fit m-auto">
        <SearchIcon />
      </label>
      <Input
        className={`flex-grow border-x-2 m-2 py-0 ${shake ? 'placeholder:text-red-500' : ''} placeholder:transition-text placeholder:duration-200`}
        variant="empty"
        type="text"
        id="search"
        name="search"
        placeholder="Fact keywords here"
      />
      <Button className="w-min font-firacode text-coral-default" variant="empty" type="submit">
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
