
import footerStyle from '../styles/Footer.module.css'
export default function Footer(){


    return <div className={`${footerStyle.foot} container-fluid py-5 justify-content-center align-conten-center align-items-center`} style={{backgroundColor:"#171D2F"}}>

<div className='container d-flex  justify-content-center  text-white py-3'>
<div className='row  w-100 gap-5 justify-content-center'>

    <div className='col-3'>
<div className=''>
    <img src="https://cdn.prod.website-files.com/66d714555784f849823be7fa/66d992bfc9a693f8a38c7fd2_Logo%20(1).svg" alt="" />
</div>
<div className=' py-5'>
    <p> Expert guidance tailored to your business needs, driving growth and innovation.</p>
</div>
<div><h3> Subscribe Us</h3></div>
<div>
    icons
</div>
    </div>




     <div className='col-3'>
<div>
    <h2> userful links</h2>
</div>
<div>
    <ul>
        <li className='my-4'> Home</li>
    <li className='my-4'> Home</li>
    <li className='my-4'> Home</li>
    <li className='my-4'> Home</li>
      <li className='my-4'> Home</li>
    
    

    </ul>
</div>
    </div>

     <div className='col-4'>
 <div>
<h2> Subscribe for our newsletter</h2>
 </div>

 <div className='d-flex '>
    <input className='w-75 p-3 ' placeholder='Your email' type="text" />
    <button className=' text-dark w-25 mx-2'  style={{backgroundColor:"#BDE162"}}> Subscribe</button>
 </div>
 <div className='row'>


<div className='col-5'>


    <div className='py-4' >
    <h2>Adddress</h2>
    </div>
    <div>
        <p>1234 Innovation Drive Suite 567 Cityville, State 89012 Country </p>
    </div>
    </div>
    <div className='col-5 '>
<div className='py-4'>
    <h4> Email</h4>
    <a href="#">info@zealconsult.com </a>
</div>
<div>
    <h4> Phone</h4>
    <a href="#">+1 (800) 555-1234 </a>
</div>
    </div>
 </div>
    </div>

</div>


</div>
<hr className='text-white'/>
<div className='container-fluid d-flex text-white justify-content-center'>
<div className='row  container'>
<div className='col-6 d-flex justify-content-between'>
<div className=' d-flex justify-content-center'>  <h5 className=' d-flex justify-content-center'> Developed by <a className='text-white' href="#"> ZealousWeb </a></h5></div>
<div> <h5> Powered by  <a className=' text-white' href="#"> webflow </a></h5></div>
<div className=' d-flex align-items-start'> <a className=' text-white d-flex align-items-start ' href="#"> Instruction</a></div>
<div> <a className='text-white' href="#"> License</a></div>
</div>

</div>
</div>
    </div>

}