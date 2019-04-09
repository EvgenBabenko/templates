import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// import './helper.css';

const App = ({
  onSubmit,
  initialValues,
}) => (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Required'),
      })}
    >
      {({ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" style={{ display: 'block' }}>
            Email
            </label>
          <input
            id="email"
            placeholder="Enter your email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.email && touched.email ? 'text-input error' : 'text-input'
            }
          />
          {errors.email &&
            touched.email && <div className="input-feedback">{errors.email}</div>}

          <button
            type="button"
            className="outline"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
            </button>
          <button type="submit" disabled={isSubmitting}>
            Submit
            </button>

          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    </Formik>
  );

export default App;
