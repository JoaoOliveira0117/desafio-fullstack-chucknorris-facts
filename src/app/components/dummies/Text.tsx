import { FC, HTMLAttributes } from 'react';

const variants = {
  h1: {
    className:
      'text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold',
  },
  h2: {
    className: 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold',
  },
  h3: {
    className: 'text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold',
  },
  h4: {
    className: 'text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold',
  },
  h5: {
    className: 'text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
  },
  h6: {
    className: 'text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
  },
  span: {
    className: 'text-sm xs:text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl',
  },
};

type TextProps = HTMLAttributes<HTMLHeadingElement | HTMLSpanElement> & {
  variant?: keyof typeof variants;
};

const Text: FC<TextProps> = ({ variant = 'span', className, children, ...rest }) => {
  const Component = variant;
  return (
    <Component className={variants[variant].className + ' ' + className} {...rest}>
      {children}
    </Component>
  );
};

export default Text;
