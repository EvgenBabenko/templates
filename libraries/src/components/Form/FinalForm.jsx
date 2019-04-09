import React from 'react';
import { Form, Field } from "react-final-form";

const inputField = (props) => ({
  input,
  meta,
}) => (
    <div>
      <label>{props.label}</label>
      <input {...input} type="text" placeholder={props.label} />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  )

const App = ({
  onSubmit,
  initialValues,
  validate,
}) => (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName">
            {inputField({ label: 'First Name' })}
          </Field>

          <Field name="email">
            {inputField({ label: 'Email' })}
          </Field>

          <Field name="age">
            {({ input, meta }) => (
              <div>
                <label>Age</label>
                <input {...input} type="text" placeholder="Age" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>

          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );

export default App;