import { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  const responsiveText = 'text-base sm:text-lg md:text-xl lg:text-2xl';
  return (
    <button
      className={`m-auto rounded-lg bg-jet-default px-4 py-2 text-lavender-default transition-colors 
        duration-200 ease-in-out hover:bg-jet-light hover:text-lavender-light active:bg-jet-dark 
        active:text-lavender-dark ${responsiveText} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
