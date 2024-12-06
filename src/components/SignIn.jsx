import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const SignIn = () => {
  const { userSignIn } = useContext(AuthContext);

  const handleUserSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    userSignIn(email, password)
      .then((data) => {
        console.log(data.user);
        const lastSignInTime = data?.user?.metadata?.lastSignInTime;
        const emailInfo = { email, lastSignInTime };

        // update data user sign in
        fetch("http://localhost:8000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(emailInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="card justify-center flex  w-full max-w-xl shrink-0 shadow-2xl">
        <form onSubmit={handleUserSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">SignIn</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
