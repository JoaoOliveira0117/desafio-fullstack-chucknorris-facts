'use client';
import { FC } from 'react';
import Button from './dummies/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationButtonProps = {
  href: string;
  children: React.ReactNode;
};

const NavigationButton: FC<NavigationButtonProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  const activeStyle = isActive ? 'bg-lavender-light text-jet-dark' : 'text-jet-light';

  return (
    <Link href={href} className="w-full">
      <Button variant="empty" className={'font-bold transition-all duration-200 ' + activeStyle}>
        {children}
      </Button>
    </Link>
  );
};

export default NavigationButton;
