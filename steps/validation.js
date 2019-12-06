import React from "react";

const validate = (values) => {
    const errors = {};

    const bday = values.Byear+'-'+values.Bmnth+'-'+values.Bday;
    const daysLag = Math.ceil(Math.abs(new Date().getTime() - new Date(bday).getTime()) / (1000 * 3600 * 24));

    if (!values.Email) {
        errors.Email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = 'Invalid email address'
    }
    if (!values.Password) {
        errors.Password = 'Required!';
    } else if (values.Password.length < 6) {
        errors.Password = 'Minimum be 6 characters or more';
    }
    if (!values.Confirmpassword ) {
        errors.Confirmpassword = 'Required!' ;
    } else if (values.Confirmpassword !== values.Password) {
        errors.Confirmpassword = 'Password mismatched' ;
    }
    if (!values.Bday) {
        errors.Bday = 'Required!';
    } else if (values.Bday.length < 2) {
        errors.Bday = 'Must be 01-09';
    } else if (values.Bday < 1 || values.Bday > 31) {
        errors.Bday = '01-31 Only' ;
    } else if (values.Bmnth === '02' && values.Bday > 29) {
        errors.Bday = '01-29 Only' ;
    } else if ((values.Bmnth === '04' || values.Bmnth === '06' || values.Bmnth === '09' || values.Bmnth === '11') && values.Bday > 30) {
        errors.Bday = '01-30 Only' ;
    } else if (daysLag < 6570) {
        errors.Bday = 'You are so young' ;
    }
    if (!values.Bmnth) {
        errors.Bmnth = 'Required!';
    } else if (values.Bmnth < 1 || values.Bmnth > 12) {
        errors.Bmnth = '01-12 Only' ;
    } else if (values.Bmnth.length < 2) {
        errors.Bmnth = 'Must be 01-09';
    }
    if (!values.Byear) {
        errors.Byear = 'Required!';
    } else if (isNaN(values.Byear)) {
        errors.Byear = 'Must be a number';
    } else if (values.Byear.length != 4) {
        errors.Byear = 'Something wrong';
    }

    return errors;
};

export default validate;

