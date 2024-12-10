import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

import SocialLogin from "../components/SocialLogin";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { toast, ToastContainer } from "react-toastify";
import { loginWithEmail, loginWithGithub, loginWithGoogle } from "../firebase/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail({ email, password });
      toast.success("Logged in successfully!", {
        onClose: () => navigate("/"),
        toastId: 1,
      });
    } catch (error) {
      toast.error("An error occurred during login", error.message);
    }
  };


  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      toast.success("login with google successful", {
        onClose: () => navigate("/"),
      });
    } catch (error) {
      toast.error(
        "An error occured with your Google account, please retry.." +
          error.message
      );
    }
  };
  const handleLoginWithGithub = async () => {
    try {
      await loginWithGithub();
      toast.success(`Log In Successfully with Github`, {
        onClose: () => navigate("/"),
      });
    } catch (error) {
      toast.error("An error occurred during login", error);
    }
  };
 
 

  return (
    <section className="mt-10">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <div className="flex justify-end px-10">
        <div> </div>
        <div>
          <NavLink
            to={"/"}
            type="button"
            className="me-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none"
          >
            Back to Home
          </NavLink>
        </div>
      </div>
      <h1 className="text-center text-3xl underline underline-offset-8 font-semibold">
        Login
      </h1>
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form onSubmit={handleSubmit}>
              {/* <!-- Email input --> */}
              <TEInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                label="Email address"
                size="lg"
                autoComplete="on"
                className="mb-6"
                required
              ></TEInput>

              {/* <!--Password input--> */}
              <div className="relative mb-6">
                <TEInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  size="lg"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                  required
                ></TEInput>
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <VscEyeClosed size={24} />
                  ) : (
                    <VscEye size={24} />
                  )}
                </div>
              </div>

              {/* <!-- Remember me checkbox --> */}
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem]">
                  <p className="mb-0 mt-2 pt-1">
                    Don&apos;t have an account?{" "}
                    <NavLink
                      to={"/sign-up"}
                      className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 font-semibold"
                    >
                      Register
                    </NavLink>
                  </p>
                </div>

                {/* <!-- Forgot password link --> */}
                <NavLink
                onClick={sendResetPassword}
                  to="/reset"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Forgot password?
                </NavLink>
              </div>

              {/* <!-- Submit button --> */}

              <TERipple rippleColor="light" className="w-full">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Login
                </button>
              </TERipple>

              {/* <!-- Divider --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200 text-gray-700">
                  OR
                </p>
              </div>
              <SocialLogin
                onLoginWithGoogle={handleLoginWithGoogle}
                onLoginWithGithub = {handleLoginWithGithub}
                //onLoginWithFacebook = {handleLoginWithFacebook}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
