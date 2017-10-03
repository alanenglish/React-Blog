import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}:</label>
          <input
            placeholder={field.placeholder}
            className="form-control"
            type="text"
            {...field.input}
          />
        {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label="Title"
          placeholder="Enter the post title here"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          placeholder="Enter the tags for the post here"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          placeholder="Spill your feelings here..."
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  // values are the user inputs into the { title: 'asdf', categories: 'asdf', content: 'asdf'}
  const errors = {};

  // validate the inputs from 'values'
  if (!values.title) {
    errors.title = 'Please enter a title for your post.';
  }
  if (values.title.length < 3) {
    errors.title = 'Please enter a title longer than 3 characters.';
  }
  if (!values.categories) {
    errors.categories = 'Pleasea enter at least one category.';
  }
  if (!values.content) {
    errors.content = 'Please enter some content please.';
  }

  // if errors empty, the form is fine to submit
  // if errors has *any* properties, reduc form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
