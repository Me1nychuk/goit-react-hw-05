import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const initialValues = {
  title: "",
};
const SearchInput = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.title);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <span>Title</span>
          <Field type="text" name="title" placeholder="Enter title" />
        </label>
        <ErrorMessage name="title" component="span"></ErrorMessage>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SearchInput;
