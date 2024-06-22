import { FC } from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return <main className="w-full max-w-4xl m-auto">{children}</main>;
};

export default Container;
