import { FC, FormEvent, FormHTMLAttributes } from 'react';

type FormValues = Record<string, string>;

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  handleSubmit: (values: FormValues) => void;
};

const Form: FC<FormProps> = ({ children, handleSubmit, ...rest }) => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formValues: FormValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value as string;
    });

    handleSubmit(formValues);
  };

  return (
    <form {...rest} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
