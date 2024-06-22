import { FC } from 'react';

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return <section className="flex flex-col items-center py-4">{children}</section>;
};

export default PageWrapper;
