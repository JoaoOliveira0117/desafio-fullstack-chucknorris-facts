import { FC } from 'react';
import NavigationButton from './NavigationButton';

const Navigation: FC = () => {
  return (
    <nav className="w-full flex justify-evenly">
      <NavigationButton href={'/'}>🏠 Home</NavigationButton>
      <NavigationButton href={'/random'}>🎲 Random</NavigationButton>
    </nav>
  );
};

export default Navigation;
