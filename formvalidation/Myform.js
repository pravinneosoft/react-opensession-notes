import React from 'react'
import {Formik, Form , Field , ErrorMessage} from 'formik';
import * as Yup from "yup";
const mySchema=Yup.object().shape({
    fullName:Yup.string()
     .required("Full name is required")
     .matches(/^[a-zA-Z ]+$/,"Only alphabate allow"),
    email:Yup.string()
       .required("Email is required") 
       .email("Invalid Email Address"),
    age:Yup.string()
       .required("Age is required")
})
export default function Myform() {
    const postData=(formValues)=>{
        console.log(formValues);
    }
  return (
    <div>
        <h2> React Formik form and validation</h2>
        <Formik initialValues={{fullName:'',age:'',email:''}} validationSchema={mySchema} onSubmit={(values)=> postData(values)}>
             <Form>
                 <div className='form-group'>
                     <label> Full Name</label>
                     <Field type="text" name="fullName" className="form-control"/>
                     <ErrorMessage name="fullName" className='alert alert-danger' component="div"/>
                 </div>
                 <div className='form-group'>
                     <label> Email</label>
                     <Field type="email" name="email" className="form-control" />
                     <ErrorMessage name="email" className='alert alert-danger' component="div"/>
                 </div>
                 <div className='form-group'>
                     <label> Age</label>
                     <Field type="text" name="age" className="form-control" />
                     <ErrorMessage name="age" className='alert alert-danger' component="div"/>
                 </div>
                 <input type="submit" value="Submit" className='btn btn-success'/>
             </Form>
        </Formik>
    </div>
  )
}
