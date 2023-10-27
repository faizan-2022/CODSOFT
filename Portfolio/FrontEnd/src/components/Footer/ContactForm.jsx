import React from 'react';
import { Slide} from 'react-awesome-reveal';
import { CgProfile } from 'react-icons/cg';
import { MdAlternateEmail } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { signUpSchema } from '../../schemas';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axios.post(
            `http://localhost:5000/api/userdata/save`,
            values
          );
  
          action.resetForm();
  
          if (response) {
            toast.success('Message send successfully', {
              position: 'bottom-left',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            });
          } else {
            toast.error('Failed to send message', {
              position: 'bottom-left',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            });
          }
        } catch (error) {
          toast.error('Failed to send message', {
            position: 'bottom-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      },
    });
  
    return (
        <Slide direction="right">
        <form onSubmit={handleSubmit}>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input
                type="text"
                autoComplete="off"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Fullname..."
              />
            </div>
            {errors.name && touched.name ? (
              <p style={{ color: "red", marginBottom: ".5rem" }}>
                {errors.name}
              </p>
            ) : null}
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input
                type="text"
                autoComplete="off"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email..."
              />
            </div>
            {errors.email && touched.email ? (
              <p style={{ color: "red", marginBottom: ".5rem" }}>
                {errors.email}
              </p>
            ) : null}
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea
                cols="30"
                rows="10"
                autoComplete="off"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Message..."
              ></textarea>
            </div>
            {errors.message && touched.message ? (
              <p style={{ color: "red", marginBottom: ".5rem" }}>
                {errors.message}
              </p>
            ) : null}
            <button aria-label="Submit Form" type="submit">
              Submit
            </button>
          </form>
        </Slide>
    );
  };
  
  export default ContactForm;