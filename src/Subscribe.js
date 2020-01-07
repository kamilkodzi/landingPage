import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const schema=Yup.object({
    email:Yup.string().email("Please enter valid email.")
})

function Subscribe(){
    return(
        <Formik 
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
            email:''
        }}>
        {
            ({
                handleSubmit,
                handleChange,
                values,
                errors,
            }) =>(
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="validationFormikEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback>
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Subscribe</Button>
                </Form>
            )
        }
        </Formik>
    )
}

export default Subscribe;