import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import signupimg from "../assets/images/signUp/food-popup.jpg"
import { FaXmark } from "react-icons/fa6";


const SignUpHome = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("")

  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const loading = setTimeout(() => {
      setShowModal(false);
    }, 200);

    return () => clearTimeout(loading);
  }, []);


  const handleSubscribe = () =>{
    if(email)
      return handleCloseModal()
  }

  return (
    <section>
      <div className="signup-home-container">
        {showModal && (
          <div
            className="modal fade show signup-home"
            style={{ display: "block" }}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div className="signup-home-overlay"></div>
            <div className="modal-dialog " role="document">
              <div className="modal-content ">
                <div className="row justify-content-center py-5">
                    <div className="col-7 newsletter-col1">
                        <div className="text-center">
                            <p className="newsletter-p1">Sign Up For Send Newsletter ?</p>
                            <p className="newsletter-p2 mb-0">Subscribe to our newsletters now and stay up-to-date with new collections, the latest books and exclusive offers.</p>
                            <Form>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} className="newsletter-email mt-5" type="email" placeholder="Enter your e-mail"name="email"id="email" />
                                <button  onClick={handleSubscribe} className="btn d-block newsletter-button mb-5" type="submit">Subscribe</button>
                                <div className="d-flex newsletter-checkbox">
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">Do not show again</label>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src={signupimg} className="signup2-img" />
                    </div>
                </div>
                <button  onClick={handleCloseModal} className="signup2-close-btn"><FaXmark /></button>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SignUpHome;


// import React, { useState } from 'react';

// const ModalComponent = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   return (
//     <div className='newsletter'>
//       {/* Button to trigger the modal */}
//       <button type="button" className="btn btn-primary newsletter" onClick={handleOpenModal}>
//         Launch demo modal
//       </button>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//           <div className="modal-dialog modal-dialog-centered" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
//                 <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 {/* Modal body content */}
//                 ...
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
//                 <button type="button" className="btn btn-primary">Save changes</button>
//               </div>
//             </div>
//           </div>
//           {/* Backdrop */}
//           <div className="modal-backdrop fade show"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ModalComponent;
