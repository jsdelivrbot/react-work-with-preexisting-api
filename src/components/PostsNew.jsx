import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions/index';

class PostsNew extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field; // es6 destructuring field.meta.touched & field.meta.error
    const inputError = `form-group ${touched && error ? 'has-danger' : '' }`;

    return (
      <section className={ inputError }>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
        <section className="text-help">
          { touched ? error : '' }
        </section>
      </section>
    );
  }

  renderTextArea(field) {
    const { meta: { touched, error } } = field;
    const inputError = `form-group ${touched && error ? 'has-danger' : '' }`;

    return (
      <section className={ inputError }>
        <label>{ field.label }</label>
        <textarea
          className="form-control"
          { ...field.input }
        />
        <section className="text-help">
          { touched ? error : '' }
        </section>
      </section>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => this.props.history.push('/'));
  }

  render() {
    // handleSubmit from redux-form
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field
          label="Title For Post"
          name="title"
          component={ this.renderField }
        />
        <Field
          label="Categories"
          name="categories"
          component={ this.renderField }
        />
        <Field
          label="Post Content"
          name="content"
          component={ this.renderTextArea }
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = 'Please enter a title';
  }
  if (!values.categories) {
    errors.categories = 'At least one category is required'
  }
  if(!values.content) {
    errors.content = 'Please enter some content'
  }

  // If errors is empty, the form is fine to submit
  // If errors has any properties, redux-form assumes form is invalid

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm',
})(
  connect(null, { createPost })(PostsNew)
);
