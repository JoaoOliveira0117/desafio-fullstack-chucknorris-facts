import { FC } from 'react';
import Text from './dummies/Text';
import Navigation from './Navigation';

const Header: FC = () => {
  return (
    <header className="m-auto my-4 mx-4 lg:mx-0">
      <Text variant="h3" className="text-jet-default text-center my-4">
        Cool Chuck Norris Facts!
      </Text>
      <Navigation />
    </header>
  );
};

export default Header;
