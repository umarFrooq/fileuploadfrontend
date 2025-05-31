import React from 'react';
import contactStyle from '../styles/Contact.module.css';
const Contact = () => {
  return (
    <div className={`${contactStyle.mainContainer} d-flex container-fluid py-3  flex-column justify-content-center align-items-center  `}>
   <div className="row container d-flex py-5 my-5 justify-content-between ">

<div className='col-2 text-center'>
<div>
  <img src="https://cdn.prod.website-files.com/66d714555784f849823be7fa/66ef150e44f29b78be9e8d64_Location.svg" alt="" />
</div>
<h3 className='py-3'> Address</h3>
<h5> 1234 Innovation DriveSuite 567Cityville,  State 89012Country</h5>
</div>
<div className='col-2 text-center'>
<div>
  <img src="https://cdn.prod.website-files.com/66d714555784f849823be7fa/66ef150eef786dd4da7f50a5_Email.svg" alt="" />
</div>
<h3> Address</h3>
<h5> 1234 Innovation DriveSuite 567Cityville,  State 89012Country</h5>
</div>




<div className='col-2 text-center'>
<div>
  <img src="https://cdn.prod.website-files.com/66d714555784f849823be7fa/66ef150e344c2721a81c4c2d_Calling.svg" alt="" />
</div>
<h3> Address</h3>
<h5> 1234 Innovation DriveSuite 567Cityville,  State 89012Country</h5>
</div>




<div className='col-2 text-center'>
<div>
  <img src="https://cdn.prod.website-files.com/66d714555784f849823be7fa/66ef150e59671ef22ed35be2_clock.svg" alt="" />
</div>
<h3> Address</h3>
<h5> 1234 Innovation DriveSuite 567Cityville,  State 89012Country</h5>
</div>


   </div>
<div  className={`${ contactStyle.secondDiv}  container-fluid m-0 p-0 flex-column d-flex justify-content-center align-items-center align-content-center  `}>

<div className={`${ contactStyle.secondDiv}  container gap-5  d-flex justity-content-between `}>


<div className={`${ contactStyle.formImg} col-4 bg-dark`}>

<img src="https://cdn.prod.website-files.com/66d714555784f849823be7fa/66e92e42866ad11d91bfa188_Img%20(6).avif" alt="" />
</div>


<div className={`${contactStyle.formImg} col-7 bg-primary text-dark p-5 bg-white`}>
  <div className="mb-3">
    <h4 className="text-dark">BUSINESS CONSULTING</h4>
    <h1 className="text-dark">Get in touch</h1>
  </div>
  <form className="row g-3">
    <div className="col-md-6">
      <label htmlFor="firstName"  className="form-label text-dark">First Name</label>
      <input type="text" placeholder=" First name" className="form-control" id="firstName" />
    </div>
    <div className="col-md-6">
      <label htmlFor="lastName"  className="form-label text-dark" >Last Name</label>
      <input type="text" placeholder="Last name" className="form-control" id="lastName" />
    </div>
    <div className="col-md-6">
      <label htmlFor="phone" className="form-label text-dark">Your Phone</label>
      <input type="text"  placeholder="Your Phone" className="form-control" id="phone" />
    </div>
    <div className="col-md-6">
      <label htmlFor="email"   className="form-label text-dark">Your Email</label>
      <input type="email" placeholder="Your Email" className="form-control" id="email" />
    </div>
    <div className="col-12">
      <label htmlFor="subject" placeholder="Subject" className="form-label text-dark">Subject</label>
      <input type="text" placeholder="Subject" className="form-control" id="subject" />
    </div>
    <div className="col-12">
      <label htmlFor="message"  className="form-label text-dark">Your Message</label>
      <textarea className="form-control" placeholder="Your Message" id="message" rows="4"></textarea>
    </div>
    <div> <button className={`${contactStyle.sendBut} p-3 my-5`}> Send message</button></div>
  </form>
</div>


</div>




</div>


<div className='container-fluid  py-5 d-flex justify-content-center' style={{backgroundColor:"#EDF0F6"}}>
  {/* <div className='d-flex '> */}
<div className={`${ contactStyle.contactService}  container flex-column  d-flex justify-content-between`}>

<div className='row my-5 py-5 w-100 d-flex justify-content-between'>



<div className=' col-5 '>
  <h5>
    Locatiion
  </h5>
  <div> <h1>Our Working Location  </h1></div>
</div>

 <div className='col-5 '>
    <p>Discover where we operate and how we can serve you. Our locations offer personalized support.</p>
     </div>
</div>
<div  className={`${ contactStyle.contactService} my-3 justify-content-between row`}>

  <div className=' col-3 '>
<div>
  <img className='w-100' src="https://cdn.prod.website-files.com/66d714555784f849823be7fa/66e95721580c12e24b53edbb_Img%20(7).avif" alt="" />
  
</div>
<div className='py-2'>
  <h1> United states </h1>
</div>
<div className=''> 
  456 Innovation Park, Suite 101San Francisco, CA 94107

</div>
<div><a href="#">contact@zealconsult.com</a> </div>

  <div className='py-3'>
    <a href="#"> +1(415) 555-6789</a>
  </div>
  </div>

    <div className=' col-3 '>
<div>
  <img className='w-100' src="https://cdn.prod.website-files.com/66d714555784f849823be7fa/66e95921bc9221d4771ccc44_Img%20(8).avif" alt="" />
  
</div>
<div className='py-2'>
  <h1> United states </h1>
</div>
<div className=''> 
  456 Innovation Park, Suite 101San Francisco, CA 94107

</div>
<div><a href="#">contact@zealconsult.com</a> </div>

  <div className='py-3'>
    <a href="#"> +1(415) 555-6789</a>
  </div>
  </div>






    <div className=' col-3 '>
<div>
  <img className='w-100' src="https://cdn.prod.website-files.com/66d714555784f849823be7fa/66e95945bc9221d4771ce42f_Img%20(9).avif" alt="" />
  
</div>
<div className='py-2'>
  <h1> United states </h1>
</div>
<div className=''> 
  456 Innovation Park, Suite 101San Francisco, CA 94107

</div>
<div><a href="#">contact@zealconsult.com</a> </div>

  <div className='py-3'>
    <a href="#"> +1(415) 555-6789</a>
  </div>
  </div>









</div>




</div>
</div>

{/* <div  className={`${ contactStyle.secondDiv}  container-fluid m-0 p-0  d-flex justify-content-center `}>
<div className='container row'>
  d
<div className='col-5 bg-dark'>
d
</div>
<div className='col-5 bg-danger'>


</div>

</div>
</div> */}

    </div>
  );
};

export default Contact;
