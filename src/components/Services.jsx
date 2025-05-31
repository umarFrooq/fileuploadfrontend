import serviceStyle from '../styles/Services.module.css'
export default function Service() {
  return (
    <div className="d-flex justify-content-center  " style={{ backgroundColor: "#EDF0F6" }}>

      <div className="row container py-0 py-lg-5 ">
        <div className={`${serviceStyle.serviceTop} col-12`}>
          <div className="row d-flex justify-content-between py-0 py-lg-5">
            <div className={`${serviceStyle.serivce}  col-lg-6 col-12`}>
              <div > <h5 className={serviceStyle.serivce}> BUSINESS CONSULTING</h5></div>
              <div>
                <h1 className={serviceStyle.servicehead}> What services do we offer for your business </h1></div>
            </div>
            <div className={`${serviceStyle.serivce} col-lg-6 col-12  `}>
              <h4  className={serviceStyle.serivce}>  See how our tailored solutions can boost your business.
                From planning to support, we provide the expertise to drive your success.</h4>
              <h5> <a href="#"> All services</a>  </h5>
            </div>
 
 



<div className= {`${serviceStyle.mainCart} col-12  justify-content-center`}>
  <div className="row g-5">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="col-md-4 justify-content-center">
        <div className={`${serviceStyle.cart} justify-content-center align-content-center`}>
          <div className='py-2'>
            <img
              src="https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e16f22db56b5a9122d93f2_Business%20Website%20Audit.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className='py-2 '><h1>Business Website Audit</h1></div>
          <p className='py-2'>Assess your website's performance and provide improvement recommendations</p>
          <div className='py-5 '><button  className={`${serviceStyle.details} px-5 py-2 `}>Details</button></div>
        </div>
      </div>
    ))}
  </div>
</div>



          </div>

        </div>
      </div>
    </div>
  );
}
