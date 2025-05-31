import serviceStyle from '../styles/Services.module.css';

export default function Cart() {
  return (
    <div className={serviceStyle.CartContainer}>
<div className={serviceStyle.cartLogo}> 
<img src="https://cdn.prod.website-files.com/66e11e76591bba0feb6049e0/66e16f22db56b5a9122d93f2_Business%20Website%20Audit.svg" alt="" />
</div>
<div className={serviceStyle.cartHead}>
<h2>Comversion Rate Optimization</h2>
</div>
<div className={serviceStyle.cartHead}>
<p> Enhance design and functionality to boost user engagement and conversions</p>
</div>
<div className={serviceStyle.cartButton} >
    <button> Deatils </button>
</div>
    </div>
  );
}
