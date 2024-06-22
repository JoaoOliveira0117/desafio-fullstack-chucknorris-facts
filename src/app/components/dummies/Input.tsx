import { FC, InputHTMLAttributes } from 'react';

const variants = {
  filled: {
    className: 'rounded-md  focus:ring-2 focus:ring-jet-default',
  },
  empty: {
    className: 'bg-inherit placeholder:text-jet-light',
  },
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: keyof typeof variants;
};

const Input: FC<InputProps> = ({ className, variant = 'filled', ...rest }) => {
  const responsiveText = 'text-base sm:text-lg md:text-xl lg:text-2xl';
  return (
    <input
      className={`w-full p-2 font-inter outline-none ${variants[variant].className}  ${responsiveText} ${className}`}
      {...rest}
    />
  );
};

export default Input;
