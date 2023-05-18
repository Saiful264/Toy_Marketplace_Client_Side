import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Form
        // onSubmit={handleLogIn}
        className="card w-96 bg-slate-200 shadow-xl items-center text-center py-8 rounded-lg"
      >
        <h1 className="text-2xl font-bold">LogIn</h1>
        {loginError && (
          <span className="text-2xl text-red-700">{loginError}</span>
        )}
        <div className="py-6 w-full">
          <input
            type="email"
            placeholder="Email"
            name="email"
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
          <Link to="/register" className="text-indigo-700 underline pl-2">
            Register
          </Link>
        </p>
        <button type="submit" className="btns-primary">
          LogIn
        </button>
        <div className="py-4">
          <button
            onClick={handleGoogleSignIn}
            className="text-base flex items-center gap-3 font-semibold btns-primary"
          >
            <span>
              <FaGoogle />
            </span>{" "}
            Continue with google
          </button>
        </div>
        <button
          onClick={handleGithubSignIn}
          className="text-base flex items-center gap-3 font-semibold btns-primary"
        >
          <span>
            <FaGithub />
          </span>{" "}
          Continue with github
        </button>
      </Form>
    </div>
  );
};

export default Login;
