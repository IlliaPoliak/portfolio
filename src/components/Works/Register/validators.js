export const validate = values => {
    const errors ={}

    if (!values.login){
        errors.login = 'Field is required'
    } else if ( values.login.length > 50 ) {
        errors.login = 'Count of characters must be 50 or less'
    } 
    
    if (!values.email) {
        errors.email = 'Field is required!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if ( !values.password || values.password.length < 8){
        errors.password = "Password can't be less than 8 characters"
    }

    if (values.repeat !== values.password){
        errors.repeat = 'Passwords do not match'
    }

    return errors
}