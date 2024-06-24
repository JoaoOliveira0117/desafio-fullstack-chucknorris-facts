import { FC } from 'react';
import Fact from './Fact';

type FactsWrapperProps = {
  facts: Fact[];
  fetched?: boolean;
};

const FactsWrapper: FC<FactsWrapperProps> = ({ facts, fetched }) => {
  return (
    <div className="max-w-2xl m-4">
      {facts.length
        ? facts.map((fact) => <Fact key={fact.id} fact={fact} />)
        : fetched && (
            <div>
              <p className="text-center">No facts found</p>
            </div>
          )}
    </div>
  );
};

export default FactsWrapper;
