import { FC } from 'react';
import Fact from './Fact';

type FactsWrapperProps = {
  facts: Fact[];
};

const FactsWrapper: FC<FactsWrapperProps> = ({ facts }) => {
  return (
    <div className="max-w-2xl m-4">
      {facts.map((fact) => (
        <Fact key={fact.id} fact={fact} />
      ))}
    </div>
  );
};

export default FactsWrapper;
