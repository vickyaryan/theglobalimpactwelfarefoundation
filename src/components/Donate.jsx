import { useState } from "react";
import SEO from "./SEO";

const Donate = () => {
  const [amount , setAmount] = useState()
  console.log('amount', amount);
  
  return(
    <div className="container py-5">
      <SEO
  title="Donate Now" 
  description="Support our mission. Your donations to The Global Impact Welfare Foundation help provide education and healthcare to those in need." 
/>
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
          <div className="bg-ngo p-4 text-white text-center">
            <h2 className="fw-bold mb-0">Make a Donation</h2>
          </div>
          <div className="card-body p-4">
            <div className="d-flex justify-content-between gap-2 mb-4">
              {['500', '1000', '5000'].map(amt => (
                <button key={amt} className="btn btn-outline-primary w-100 fw-bold" onClick={()=>setAmount(amt)}>{'₹'+amt}</button>
              ))}
            </div>
            <form>
              <div className="mb-3">
                <input type="number" value={amount} className="form-control form-control-lg bg-light" placeholder="Other Amount" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>
              <div className="mb-4">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
              <button type="submit" className="btn btn-ngo w-100 py-3 fw-bold shadow">
                Complete Donation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Donate;