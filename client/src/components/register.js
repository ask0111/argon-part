import React from 'react'
import "./register.css";
export default function Register(){
  return (
    <>
      <div className="login-form">
        <h2>Register With</h2>
        <div className="logos">
          <div className='logo'>
          <img
            src="https://user-images.githubusercontent.com/87072168/256569640-934dd0e8-d940-44b4-9761-613c2250b353.jpg"
            alt="Logo 1"
          />
          </div>
          <div className='logo'>
          <img
            src="https://user-images.githubusercontent.com/87072168/256569473-aa5fd0d2-e51c-43e7-b847-790f3896a4ae.png"
            alt="Logo 2"
          />
          </div>
          <div className='logo'>
          <img
            src="https://user-images.githubusercontent.com/87072168/256569502-c85a1e99-dad1-4387-8848-2bb04257bb1b.png"
            alt="Logo 3"
          />
          </div>
        </div>
        <hr className="line" />
        <div className="input-group">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        
        <div className="checkbox">
          <input type="checkbox" id="agree" />
          <label for="agree">I agree to <b>Terms and Conditions</b></label>
        </div>
        <button type="submit">Submit</button>
        <p>
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>
    </>
  );
}