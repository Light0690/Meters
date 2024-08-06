import * as Yup from "yup";
import { useFormik } from 'formik';
import { maskJs } from 'mask-js';
import cn from 'classnames';

import UIButton from '@ui/UIButton';
import UiFormInput from '@ui/UiFormInput';

import styles from './Form.module.scss';

interface props {
  btnText: string
}

const Presentation = ({ btnText }: props) => {
  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validationSchema: Yup.object().shape({
      number: Yup.string()
        .min(6, "*слишком короткий номер")
        .max(9, "*слишком длинный номер"),
    }),
    onSubmit: ({ number }) => {
      console.log(number)
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <UiFormInput
        name="number"
        type="string"
        title="Номер"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={maskJs("99-99-99", formik.values.number)}
        errors={formik.errors.number}
        touched={formik.touched.number}
      />
      <UIButton text={btnText} typeAnim='filling' type='submit'/>
    </form>
  );
};

export default Presentation;