import { useState } from "react";
import './Registration.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // Clear error when user starts typing again
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Username validation
    if (values.username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation - must be exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(values.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    // Strong password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(values.password)) {
      newErrors.password = "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      const res = await axios.post("http://localhost:8081/signup", values);
      if (res.status === 200) {
        alert("Registration Successful!");
        navigate("/Loginpage");
      } 
    } catch (err) {
      alert("Registration Failed. Please check the console for details.");
      console.error("Registration error:", err);
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="registration-form">
            <h1 className="main-heading mb-3">Registration Form</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  required
                />
                {errors.username && <p className="error-message">{errors.username}</p>}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit phone number"
                  maxLength="10"
                  required
                />
                {errors.phone && <p className="error-message">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter strong password"
                  required
                />
                {errors.password && <p className="error-message">{errors.password}</p>}
              </div>
              <br />
              <button type="submit" className="btn btn-submit">Register Now</button>
              <p className="login-link">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/Loginpage")}
                  style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
                >
                  Login here
                </span>
              </p>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;