import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
// import './Register.css'
import styles from './Register.module.css'
import { validate } from './validators'
import BackBtn from '../../common/BackBtn/BackBtn';


const Input = ({ input, label, type, required, meta: { touched, error } }) => {
    const {field, errorMessage, errorField } = styles
    
    return (
    <div className={field}>
        <label>{label}: {required && <span className={styles.required}>*</span> }
        {touched && error && <span className={errorMessage}>{error}</span>}
            <input
                {...input}
                type={type}
                placeholder={label}
                className={touched && error ? errorField : ''}
            />
        </label>
    </div>
)
}

const Register = (props) => {

    const {formWrapper, sex, status, button} = styles

    // console.log(props)
    return <div className={formWrapper}>
        <form id='register' onSubmit={props.handleSubmit}>

            <Field
                name="login"
                component={Input}
                type="text"
                label="Login"
                required
            />

            <Field
                name="email"
                component={Input}
                type="email"
                label="Email"
                required
            />

            <div className={sex}>
                <label>Sex</label>
                <div>
                    <label>
                        <Field name="sex" component="input" type="radio" value="male" />
                        Male
                </label>
                    <label>
                        <Field name="sex" component="input" type="radio" value="female" />
                        Female
                </label>
                </div>

                <label htmlFor="employed">Employed</label>
                <Field
                    name="employed"
                    id="employed"
                    component="input"
                    label="Emloyed"
                    type="checkbox"
                />
            </div>

            <div className={status}>
                <label>Marital status</label>
                <Field name="status" component="select">
                    <option />
                    <option value="married">Maried</option>
                    <option value="single">Single</option>
                </Field>
            </div>

            <Field
                name="password"
                component={Input}
                type="password"
                label="Password"
                required
            />

            <Field
                name="repeat"
                component={Input}
                type="password"
                label="Password (repeat)"
                required
            />

            <button type="submit" disabled={props.pristine || props.submitting} className={button}>Registration</button>
        </form>

        <BackBtn />
    </div>
}

export default compose(
    connect(state => ({
        regData: state.register.regData,
        // initialValues: {
        //     login: 'Log',
        //     email: 'polak@ukr.net',
        //     sex: 'male',
        //     employed: true,
        //     status: 'single',
        //     password: '11111111',
        //     repeat: '11111111'
        // }
    }), {}),
    reduxForm({
        form: 'registration',
        validate
    })
)(Register);