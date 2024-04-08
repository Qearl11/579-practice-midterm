import { useState } from "react";

// @todo this is *similar* to a real world password confirm form.
// The "Submit your password" button should be disabled until
// both password fields match and the password entered is at
// least 7 characters.
const Problem4 = () => {


  return(
    <>
      <h4>Create a password!</h4>
      <label className="form-label">Password</label>
      {/* @tip the input event on the inputs will work for this.  */}
      <input
        type="text"
        className="form-control"
      />
      <label className="form-label">Confirm Password</label>
      <input
        type="text"
        className="form-control"
      />
      <br />
      <button className='btn btn-primary'>Submit Your Password</button>
      <strong><i>The submit button should only work when the two password fields match, and the password is at least 7 characters long.</i></strong>
    </>
  )
}

export default Problem4;
