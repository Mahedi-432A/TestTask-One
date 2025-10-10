import React, { useContext } from "react";
import { AuthCotext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthCotext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const { email, password, ...rest } = Object.fromEntries(
      formData.entries()
    );
    const userProfile = { email, ...rest };
    // const email = formData.get("email");
    // const password = formData.get("password");
    // console.log(email, password, userProfile);

    // creating user in firebase
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // send datta to the server
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
          form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <legend className="fieldset-legend">Sign Up</legend>

      <label className="label">Name</label>
      <input name="name" type="text" className="input" placeholder="Name" />

      <label className="label">Address</label>
      <input
        name="address"
        type="text"
        className="input"
        placeholder="Address"
      />

      <label className="label">Phone Number</label>
      <input
        name="phone"
        type="text"
        className="input"
        placeholder="Phone Number"
      />

      <label className="label">Photo URL</label>
      <input
        name="photo"
        type="text"
        className="input"
        placeholder="Photo URL"
      />

      <label className="label">Email</label>
      <input name="email" type="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input
        name="password"
        type="password"
        className="input"
        placeholder="Password"
      />

      <button type="submit" className="btn btn-neutral mt-4">
        SignUp
      </button>
    </form>
  );
};

export default SignUp;
