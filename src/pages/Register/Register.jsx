import { Form, Link } from "react-router-dom";
import reg from "../../assets/signup.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, password, photoURL);

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
       {
        toast.error("Please provide a valid email");
      return;
    }

    if (password < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateUserProfile(name, photoURL)
          .then(toast.success("Update user profile successful!"))
          .catch((error) => {
            const errormessage = error.message;
            console.log(errormessage);
            toast.error(errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div>
        <Form
          onSubmit={handleRegister}
          className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg"
        >
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <div className="py-6 w-full">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input w-full max-w-xs"
            />
          </div>
          <div className="pb-6 w-full">
            <input
              type="text"
              name="photoURL"
              placeholder="Photo Url"
              className="input w-full max-w-xs"
            />
          </div>
          <div className="pb-6 w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input w-full max-w-xs"
            />
          </div>
          <div className="w-full pb-2">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="input w-full max-w-xs"
            />
          </div>
          <p className="text-start text-base font-semibold">
            create a new acount
            <Link to="/login" className="text-indigo-700 underline pl-2">
              Login
            </Link>
          </p>
          <button type="submit" className="btns-primary">
            Register
          </button>
        </Form>
      </div>
      <img className="w-4/12 m-0" src={reg} alt="" />
    </div>
  );
};

export default Register;
