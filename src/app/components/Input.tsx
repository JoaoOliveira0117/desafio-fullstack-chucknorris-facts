import { FC, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ className, ...rest }) => {
  const responsiveText = 'text-base sm:text-lg md:text-xl lg:text-2xl';
  return (
    <input
      className={`w-full m-4 rounded-md p-2 outline-none focus:ring-2 focus:ring-jet-default ${responsiveText} ${className}`}
      {...rest}
    />
  );
};

export default Input;
