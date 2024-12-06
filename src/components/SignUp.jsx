import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {
  const { userSignUp } = useContext(AuthContext);
  // console.log(userSignUp)

  const handleUserSingUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password,name);
    const userInfo = { name, email };

    userSignUp(email, password)
      .then((res) => {
        console.log(res.user);
        // users data send to database
        fetch("http://localhost:8000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "success!",
                text: "User successfully add",
                icon: "success",
                confirmButtonText: "Cool",
              });
              e.target.reset();
            }
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="card justify-center flex  w-full max-w-xl shrink-0 shadow-2xl">
        <form onSubmit={handleUserSingUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
