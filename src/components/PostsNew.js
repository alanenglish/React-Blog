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
          label="Tags"
          placeholder="Enter the tags for the post here"
          name="tags"
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

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
