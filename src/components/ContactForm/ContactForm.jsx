import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import './ContactForm.css'

const ContactBoxSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short').max(20, 'Too long').required('The name is required'),
    number: Yup.string().matches (
        /^[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/,
        { message: 'Enter valid phone number', excludeEmptyString: false }
    ).required('The number is required'),
});


const ContactForm = ({onAddUser}) => {
    const handleSubmit = (values, actions) => {
       
        onAddUser(values);
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={{  name: '', number:'' }}
            validationSchema={ContactBoxSchema}
            onSubmit={handleSubmit}
           
        >
                <Form>
                    <div className='form'>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" />
                    
                        <label htmlFor="number">Number</label>
                        <Field type="tel" id="number" name="number"
                    
                         placeholder="XXX XX XX"/>
                         <ErrorMessage name="number" component="div" />
                    
                         <button className='addbutton' type="submit">Add Contact</button>
                    </div>
                    
                </Form>
        
        </Formik>
    );
};

export default ContactForm;

