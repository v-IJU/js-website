import React from "react";
import { BsX } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
import { BsSuitDiamondFill } from "react-icons/bs";
import { pricing } from "../constants";

const Pricing = () => {
  return (
    <section className="container-fluid pricing pt-5 mt-5" id="pricing">
      <div className="row justify-content-center">
        <div className="col-7">
          {pricing.map((list) => (
            <React.Fragment key={list.id}>
              {list.title && (
              <p className="mb-1 Ubuntu pricing-h1">
                {list.title}
              </p>
              )}
              {list.subtitle && (
              <p className="pricing-p2 Poppins">
                {list.subtitle}
              </p>
              )}
                {list.pricingPlans && (
              <div className="row justify-content-center gap-4 py-5">
                {list.pricingPlans.map((price) => (
                  
                  <div key={price.id} className={`col-4 plan-container py-3 ${price.tag ? 'best-sale' : ''}`}>
                    {price.tag && (
                      <p className="tag">{price.tag}</p>
                    )}
                    <p className="Ubuntu plan pt-4 pb-2 mb-0 ">{price.plan}</p>
                    <p className="price">$<span>{price.price}</span></p>
                    <div className="plan-text text-center">
                    <p>{price.taxText}</p>
                    <p >{price.cancelMsg}</p>
                    </div>
                    <div className="package">
                  {price.meal ? <div className="d-flex align-items-center py-1"><IoCheckmark /> <p className="mb-0">{price.meal}</p></div> : <BsX /> }
                  {price.order ? <div className="d-flex align-items-center py-1"><IoCheckmark /> <p className="mb-0">{price.order}</p></div> : <BsX /> }
                  {price.delevery ? <div className="d-flex align-items-center py-1"><IoCheckmark /> <p className="mb-0">{price.delevery}</p></div> : <BsX /> }
                  {price.access ? <div className="d-flex align-items-center py-1"><IoCheckmark /> <p className="mb-0 word-wrap-nowrap">{price.access}</p></div> : <BsX className="mx-1" /> }
              </div>
              <button className="package-btn">Shop Now<span className="packag-btn-icon"><BsSuitDiamondFill /></span></button>
                  </div>
                ))}
               
              </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
