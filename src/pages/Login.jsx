import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify'; // Import Toastify
import { useState, useContext } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log('Submitting login with values:', values); // Debug log for submitted values
    setErrorMessage(''); 

    try {
      const response = await axios.post('https://task-api-six-ebon.vercel.app/api/user/login', values);

      if (response.data.token) {
        console.log('Login successful:', response.data);
        localStorage.setItem('authToken', response.data.token); 
        const isLoggedIn = await login(values);
        console.log('Login status:', isLoggedIn); // Debug log for login status
        if (isLoggedIn) {
            navigate('/'); 
        }
      } else {
        toast.error('Login failed. Invalid response from server.'); // Show error message
        setErrorMessage('Login failed. Invalid response from server.');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed. Please check your credentials.'); // Display error message to user
      console.error('Login failed:', error);
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <div className="container w-50 mt-5" style={{ background: 'url(/path/to/logo.png) no-repeat center center fixed', backgroundSize: 'cover' }}>
      <h2 className="text-center" style={{ color: 'white' }}>Login</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Display error message */}

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>

            <div className="d-flex gap-2">
              <button type="button" className="btn btn-secondary flex-grow-1" onClick={() => navigate('/register')}>
                Register
              </button>
              <button type="submit" className="btn btn-primary flex-grow-1" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
