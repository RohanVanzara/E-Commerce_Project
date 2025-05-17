import { useState } from "react";
import './Loginpage.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Loginpage = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8081/login", values);
            if (res.status === 200) {
                alert("Login successful!");
                navigate("/");
            } else {
                alert("Registration failed. Try again.");
            }
        } catch (err) {
            alert("Login failed! Please check your email or password.");
        }
    };

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="login-form">
                        <h1 className="main-heading mb-3">Login Form</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <br />
                            <button type="submit" className="btn btn-submit">
                                Login Now
                            </button>

                            <p className="login-link">
                                Not a member?{" "}
                                <a onClick={() => navigate("/Registration")} style={{ cursor: "pointer" }}>
                                    Register here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Loginpage;
