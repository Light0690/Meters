import * as Yup from "yup";
import { useFormik } from 'formik';

import UIButton from '@ui/UIButton';
import UiFormInput from '@ui/UiFormInput';

import styles from './Form.module.scss';

interface props {
  btnText: string
}

const Form = ({ btnText }: props) => {
  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validationSchema: Yup.object().shape({
      number: Yup.string()
        // .min(6, "*слишком короткий номер")
        // .max(9, "*слишком длинный номер"),
    }),
    onSubmit: ({ number }) => {
      console.log(number)
    },
  });
  const mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <UiFormInput
        name='number'
        type='phone'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.number}
        errors={formik.errors.number}
        touched={formik.touched.number}
        placeholder='+7 (999) 999-99-99'
        mask={mask}
      />
      <UIButton text={btnText} typeAnim='filling' type='submit'/>
    </form>
  );
};

export default Form;