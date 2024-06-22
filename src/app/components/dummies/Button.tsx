import { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

const variants = {
  filled: {
    className: `rounded-lg bg-jet-default px-4 py-2 text-lavender-default transition-colors 
        duration-200 ease-in-out hover:bg-jet-light hover:text-lavender-light active:bg-jet-dark 
        active:text-lavender-dark`,
  },
  outline: {
    className: `px-2 py-2 border-b-2 font-semibold border-jet-dark text-jet-default transition-colors 
        duration-200 ease-in-out hover:text-jet-light hover:border-jet-light active:text-jet-dark active:border-jet-dark`,
  },
  empty: {
    className: `rounded-lg px-4 py-2 text-jet-default transition-colors 
        duration-200 ease-in-out hover:text-jet-light active:text-jet-dark`,
  },
};

const Button: FC<ButtonProps> = ({ variant = 'filled', className, children, ...rest }) => {
  const responsiveText = 'text-base sm:text-lg md:text-xl lg:text-2xl';
  return (
    <button
      className={`m-auto w-full font-inter ${variants[variant].className} ${responsiveText} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
