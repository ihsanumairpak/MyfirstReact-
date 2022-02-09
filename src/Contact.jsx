import React ,{useState} from "react";
const Contact = () => {
const [data,Setdata]=useState({
 fullname:'',
 phone:'',
 email:'',
 message:''
});    
const FormSubmit=(e)=>{
e.preventDefault();
alert(`${data.fullname} Form is Submitted`)
};
const inputEvent=(event)=>{
    const{name,value}=event.target;
    Setdata((prev)=>{
        return {
            ...prev,
            [name]:value,
        }
    })
   
};

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
    </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={FormSubmit} >
            <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name here"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Mobile
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your mobile number here"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
