import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passError, setPassError] = useState(false)

  const ref = useRef(null)

  const validateForm = (e) => {
    e.preventDefault()

    const { email, password } = e.target

    if (email.value === '') {
      setEmailError(true)
      ref.current.focus();
    }
    else {
      setEmailError(false)
    }
    if (password.value === '') {
      setPassError(true)
    }
    else {
      setPassError(false)
    }

    if (email.value !== '' && password.value !== '') {
      toast.success('Login Success', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setemail('')
      setpass('')
    }

  }


  return (
    <>
      <div className="login_page">
        <div className="bg_img">
          <img src="Rectangle 1.png" alt="bg_img" />
        </div>
        <div>
          <form className="form" onSubmit={validateForm}>
            <div className="form_logo">
              <img src="form_logo.png" alt="" />
            </div>
            <h5>Login</h5>
            <div className="form_bg mb-3">
              <img src="form_bg.png" alt="form_bg_img" />
            </div>
            <div className="form_input mb-3 ">
              <input type="email" placeholder="Email" ref={ref } onChange={(e) => setemail(e.target.value)} name='email' value={email} />
              {emailError ? <p style={{ color: "red" }} autoFocus><span className="me-2"><img src="validate.svg"></img></span>Email field is required</p> : null}
            </div>
            <div className="form_input mb-3">
              <input type="password" placeholder="Password" onChange={(e) => setpass(e.target.value)} name='password' value={pass} />
              {passError ? <p style={{ color: "red" }}><span className="me-2"><img src="validate.svg"></img></span>Password should not be empty</p> : null}
            </div>
            <div className="sign_in_btn">
              <button type="submit">Sign In</button>
            </div>
            <div className="forgot_pass mt-2">
              <p>Forgot password</p>
              <p className="new_user">New User? Sign Up</p>
            </div>
            <div>or</div>
            <div className="buttons mt-3">
              <button className="mb-3">
                <div className="d-flex ms-2 mt-1">
                  <img src="google.png" alt="google" className="my-1" />
                  <p className="d-flex mt-2 w-100 h-100 justify-content-center align-items-center">CONTINUE WITH GOOGLE</p>
                </div>
              </button>
              <button>
                <div className="d-flex ms-2 mt-1">
                  <img src="fb.png" alt="fb" className="my-1" />
                  <p className="d-flex mt-2 w-100 h-100 justify-content-center align-items-center">CONTINUE WITH FACEBOOK</p>
                </div>
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>

    </>

  );
};

export default Login;