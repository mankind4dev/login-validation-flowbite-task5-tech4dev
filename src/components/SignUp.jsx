import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginForm } from "../hooks/useLoginForm";
import { signInFailure, signInStart, signInSuccess } from "../redux/userSlice";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error: errorMessage = null, loading = false } = useSelector(
    (state) => state.user || {}
  );
  const { formDatas, setFormDatas, errors, validate } = useLoginForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      dispatch(signInStart());

      if (
        formDatas.email === "test@example.com" &&
        formDatas.password === "password123"
      ) {
        dispatch(signInSuccess(formDatas));
        navigate("/pages");
      }
    } else {
      dispatch(signInFailure("Please fill out all fields."));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDatas({ ...formDatas, [name]: value });
  };

  return (
    <div className="App">
      <section>
        <h1>Login</h1>
        <p>
          Input your correct email and password below to login into your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="formInput">
            <Label htmlFor="email" value="Email:" />
            <TextInput
              type="email"
              placeholder="name@gmail.com"
              id="email"
              name="email"
              value={formDatas.email}
              onChange={handleChange}
              color={errors.email || errorMessage ? "failure" : "success"}
              className={`border ${
                errors.email || errorMessage
                  ? "border-red-500"
                  : "border-green-500"
              }`}
            />
            {errors.email && (
              <p className="emailError text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="formInput">
            <Label htmlFor="password" value="Password:" />
            <TextInput
              type="password"
              placeholder="************"
              id="password"
              name="password"
              value={formDatas.password}
              onChange={handleChange}
              color={errors.password || errorMessage ? "failure" : "success"}
              className={`border ${
                errors.password || errorMessage
                  ? "border-red-500"
                  : "border-green-500"
              }`}
            />
            {errors.password && (
              <p className="pwdError text-red-500">{errors.password}</p>
            )}
          </div>
          {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
          <Button type="submit" gradientDuoTone="cyanToBlue" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
        <div className="acct">
          <span>Don't have an account?</span>
          <Link className="links" to="/register">
            register here
          </Link>
        </div>
      </section>
    </div>
  );
}
