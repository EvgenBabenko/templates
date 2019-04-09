import React from 'react'
import { Field } from 'redux-form';

const inputField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <label>{label}</label>
      {/* <div> */}
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      {/* </div> */}
    </div>
  )

const SimpleForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
}) => (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={inputField}
          type="text"
          label="First Name"
        />
      </div>

      <div>
        <Field
          name="email"
          component={inputField}
          type="text"
          label="Email"
        />
      </div>

      <div>
        <label>Sex</label>
        {/* <div> */}
          <label>
            <Field
              name="sex"
              component={inputField}
              type="radio"
              value="male"
            />{' '}
            Male
          </label>
          <label>
            <Field
              name="sex"
              component={inputField}
              type="radio"
              value="female"
            />{' '}
            Female
          </label>
        {/* </div> */}
      </div>

      <div>
        <label>Favorite Color</label>
        {/* <div> */}
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        {/* </div> */}
      </div>

      <div>
        <label htmlFor="employed">Employed</label>
        {/* <div> */}
          <Field
            name="employed"
            id="employed"
            component={inputField}
            type="checkbox"
          />
        {/* </div> */}
      </div>

      <div>
        <label>Notes</label>
        {/* <div> */}
          <Field name="notes" component="textarea" />
        {/* </div> */}
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )

export default SimpleForm;