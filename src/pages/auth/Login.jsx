import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";
import DoctorLayout from "../../layouts/DoctorLayout";


function Login() {
  const [view, setView] = useState("login");

  return (
    <div className="container-fluid vh-100 p-0">
      <div className="row h-100 m-0">

        {/* LEFT IMAGE */}
        <div className="col-md-6 d-none d-md-block login-image">
          <div className="image-overlay-text">
            <h1>Welcome to OPD Management</h1>
            <p>
              Efficient patient records, appointment scheduling,
              and hospital administration made simple.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">

          <div className="auth-card">

            {view === "login" && (
              <>
                <h2 className="auth-title">Doctor Login</h2>
                <p className="auth-subtitle">
                  Please enter your email and password to continue
                </p>

                <form>
                  <input type="email" className="form-control mb-3" placeholder="Email Address" />
                  <input type="password" className="form-control mb-3" placeholder="Password" />

                  <div className="text-end mb-3">
                    <span className="auth-link" onClick={() => setView("forgot")}>
                      Forgot Password?
                    </span>
                  </div>

                  <button type="submit" className="btn btn-success w-100 animated-btn">
                    Login
                    <span className="arrow">→</span>
                  </button>
                </form>

                <div className="text-center mt-3">
                  Don’t have an account?{" "}
                  <span className="auth-link" onClick={() => setView("signup")}>
                    Sign Up
                  </span>
                </div>
              </>
            )}

            {view === "signup" && (
              <>
                <h2 className="auth-title">Create Account</h2>
                <p className="auth-subtitle">
                  Fill the details below to create your account
                </p>

                <form>
                  <input type="text" className="form-control mb-3" placeholder="Full Name" />
                  <input type="email" className="form-control mb-3" placeholder="Email Address" />
                  <input type="password" className="form-control mb-3" placeholder="Password" />

                  <button type="submit" className="btn btn-success w-100 animated-btn">
                    Sign Up
                    <span className="arrow">→</span>
                  </button>
                </form>

                <div className="text-center mt-3">
                  Already have an account?{" "}
                  <span className="auth-link" onClick={() => setView("login")}>
                    Login
                  </span>
                </div>
                    <Link to={"/"} >Back To Dashbord</Link>
              </>
            )}

            {view === "forgot" && (
              <>
                <h2 className="auth-title">Forgot Password</h2>
                <p className="auth-subtitle">
                  Enter your registered email to reset password
                </p>

                <form>
                  <input type="email" className="form-control mb-3" placeholder="Email Address" />
                  <button type="submit" className="btn btn-success w-100 animated-btn">
                    Send Reset Link
                    <span className="arrow">→</span>
                  </button>
                </form>

                <div className="text-center mt-3">
                  <span className="auth-link" onClick={() => setView("login")}>
                    Back to Login
                  </span>
                </div>

              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;