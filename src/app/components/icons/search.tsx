import { FC } from 'react';

const SearchIcon: FC = () => {
  return (
    <svg
      className="text-jet-light"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={32}
      height={32}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-4.35-4.35M16.1 9.55a6.55 6.55 0 11-13.1 0 6.55 6.55 0 0113.1 0z"
      />
    </svg>
  );
};

export default SearchIcon;
