import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <React.Fragment>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

export default AppFormField;
