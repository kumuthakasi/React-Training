import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div>{error}</div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${(meta.touched && meta.error) ? 'error' : ''}`;
        return (
            <div>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <Button type="submit">Submit</Button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    if (formValues && !formValues.title) {
        errors.title = 'Title cannot be empty';
    }

    if (formValues && !formValues.description) {
        errors.description = 'Description cannot be empty';
    }

    return errors;
}

export default reduxForm({
    form: 'streamform',
    validate: validate
})(StreamForm)

// const formWrapped = reduxForm({
//     form: 'StreamCreate',
//     validate: validate
// })(StreamCreate)

// export default connect(null, { createStream })(formWrapped)