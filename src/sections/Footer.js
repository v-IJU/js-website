import React from "react";
import { footer } from "../constants";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="container-fluid py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-7">
        <div className="row justify-content-between">
  {footer.map((list) => (
    <div className="col footer-col" key={list.id}>
      {list.logo && (
        <React.Fragment>
          <img src={list.logo} className="footer-logo" alt="footer-logo" />
          <div className="d-flex ps-3 py-4 my-2">
            {list.icons?.map((icon, index) => (
              <img key={index} src={icon} className="social-icon" alt="social-icon" />
            ))}
          </div>
        </React.Fragment>
      )}

      {list.title && (
        <React.Fragment>
          <p className="footer-title ">{list.title}</p>
          {list.place && <p className="footer-place word-wrap-nowrap mb-0">{list.place}</p>}
          {list.place2 && <p className="footer-place">{list.place2}</p>}
          {list.phone && <p className="footer-contct mb-0 pt-2">{list.phone}</p>}
          {list.mail && <p className="footer-contct">{list.mail}</p>}
        </React.Fragment>
      )}
      {list.Navigation && (
        
        <ul className="footer-ul">
          {list.Navigation.map((nav) => (
            <li key={nav.id} className="footer-item">
              <a className="footer-link text-decoration-none" href={nav.link}>{nav.title}</a>
            </li>
          ))}
        </ul>
      )}

      {list.copyRights && <p className="copyright">{list.copyRights} <span><FaRegCopyright /></span> 2022</p>}
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
