import React from 'react';
import Mail from '../../Images/Email.png'

const Contactform = () => {
  return (
    <div>
      <div class="container">
      <h1 class="mb-5 text-center p-4" style={{color:'orangered'}}>Contact Us</h1>
        <div class="row">
          <div class="col-lg-6 col-md-10 col-sm-10">
            
            <form
              action="https://formsubmit.co/a4b747078a3b29dda1afcb0752f28eb7" method="POST">

              <div class="mb-3" style={{maxWidth:'50%'}}>
                <label class="form-label">Full Name</label>
                <input name="name" type="text" class="form-control" required />
              </div>

              <div class="mb-3"style={{maxWidth:'50%'}}>
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3"style={{maxWidth:'50%'}}>
                <label class="form-label">Phone (optional)</label>
                <input name="phone" class="form-control" />
                <div id="phoneHelp" class="form-text">
                  If you rather talk to a human directly.
                </div>
              </div>

              <div class="mb-3"style={{maxWidth:'50%'}}>
                <label class="form-label">Your Message</label>
                <textarea
                  name="message"
                  class="form-control"
                  rows="3"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>



          <div class="col-lg-6 col-sm-12 col-md-12 position-relative mt-4">
            <img src={Mail}class=" position-absolute top-50 start-50 translate-middle img-fluid" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contactform;