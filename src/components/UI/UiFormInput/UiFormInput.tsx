import { ChangeEventHandler, FocusEventHandler } from "react";
import MaskedInput, { Mask } from 'react-text-mask';
import cn from "classnames";

import styles from "./UiFormInput.module.scss";

interface Props extends  React.InputHTMLAttributes<HTMLInputElement>{
  name: string;
  type: string;
  title?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  value: string | number;
  errors: string | undefined;
  touched: boolean | undefined;
  mask: Mask | ((value: string) => Mask);
}

const UiFormInput = ({
  name,
  type,
  title = '',
  onChange,
  onBlur,
  value,
  errors,
  touched,
  mask,
  ...props
}: Props) => {
  return (
    <div className={styles.container}>
      <label
        className={cn(
          styles.container__label,
          touched && errors && styles.container__errors,
        )}
        htmlFor={name}
      >
        {title}
      </label>
      <MaskedInput
        name={name}
        id={name}
        type={type}
        className={styles.container__input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        mask={mask}
        {...props}
      />
      {touched && errors && (
        <div className={styles.container__error}>{errors}</div>
      )}
    </div>
  );
};

export default UiFormInput;
