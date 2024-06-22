import { FC } from 'react';
import Text from './dummies/Text';
import Link from 'next/link';

type FactProps = {
  fact: Fact;
};

const Fact: FC<FactProps> = ({ fact }) => {
  return (
    <Link href={fact.id}>
      <Text
        variant="h6"
        className="block m-2 p-4 rounded-lg font-inter hover:bg-jet-light hover:text-lavender-light transition-all duration-150"
      >
        {fact.value}
      </Text>
    </Link>
  );
};

export default Fact;
