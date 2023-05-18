import { Form, Link } from "react-router-dom";
import reg from "../../assets/signup.jpg";

const Register = () => {
  const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  }
  return (
    <div className="flex justify-center items-center">
      <div>
        <Form onSubmit={handleRegister} className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg">
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
