

const Login = () => {

  return (
    <>
    {/* <div className="container">
      <div className="row">

      </div>
    </div> */}
      <div className="login_page">
        <div className="bg_img">
          <img src="Rectangle 1.png" alt="bg_img" />
          </div>
          <div>
            <div className="form">
              <div className="form_logo">
                <img src="form_logo.png" alt="" />
              </div>
              <h5>Login</h5>
              <div className="form_bg mb-3">
                <img src="form_bg.png" alt="form_bg_img" />
              </div>
              <div className="form_input mt-3 mb-5">
                <input type="email" required placeholder="Email" />
              </div>
              <div className="form_input mb-3">
                <input type="password" required placeholder="Password" />
              </div>
              <div className="sign_in_btn">
                <button>Sign In</button>
              </div>
              <div className="forgot_pass mt-2">
                <p>Forgot password</p>
                <p className="new_user">New User? Sign Up</p>
              </div>
              <div>or</div>
              <div className="buttons mt-3">
                <button className="mb-3">
                  <div className="d-flex ms-2 mt-1">
                    <img src="google.png" alt="google" className="my-1"/>
                    <p className="d-flex mt-2 w-100 h-100 justify-content-center align-items-center">CONTINUE WITH GOOGLE</p>
                  </div>
                  </button>
                <button>
                <div className="d-flex ms-2 mt-1">
                    <img src="fb.png" alt="fb" className="my-1"/>
                    <p className="d-flex mt-2 w-100 h-100 justify-content-center align-items-center">CONTINUE WITH FACEBOOK</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
     
    </>

  );
};

export default Login;