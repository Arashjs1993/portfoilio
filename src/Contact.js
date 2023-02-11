import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Contact = () => {
  
    return (
        <section className="contact-section">
      <div className="container">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 text-center">
                    <h3 className=" text-white text-xl p-20 pt-20">If you got interested feel free to contact me</h3>
                    
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span className="font-bold">Address:</span> Italy, Pavia
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span className="font-bold">Phone:</span>
                          <a href="tel://123456789">+39 3792543099</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span className="font-bold">Email:</span>
                          <a href="mailto:info@yoursite.com">
                            arash.javanshour1993@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    {/* <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span className="font-bold">Website:</span>
                          <a href="#">yoursite.com</a>
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <style jsx>
    {`
        .contact-section {
            padding: 7em 0;
            }
            
            .wrapper {
            width: 100%;
            -webkit-box-shadow: 0px 21px 41px -13px rgba(0, 0, 0, 0.18);
            -moz-box-shadow: 0px 21px 41px -13px rgba(0, 0, 0, 0.18);
            box-shadow: 0px 21px 41px -13px rgba(0, 0, 0, 0.18);
            }
            
            .contact-wrap {
            background: black;
            height: 100%;
            }
            
            h3 {
            color: white;
            }
            
            .img {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            }
            
            .form-control {
            height: 62px;
            background: transparent;
            color: rgba(255, 255, 255, 0.8) !important;
            font-size: 16px;
            border-radius: 0px;
            box-shadow: none !important;
            border: 1px solid rgba(255, 255, 255, 0.2);
            &::-webkit-input-placeholder {
                /* Chrome/Opera/Safari */
                color: rgba(255, 255, 255, 0.5) !important;
            }
            &::-moz-placeholder {
                /* Firefox 19+ */
                color: rgba(255, 255, 255, 0.5) !important;
            }
            &:-ms-input-placeholder {
                /* IE 0+ */
                color: rgba(255, 255, 255, 0.5) !important;
            }
            &:-moz-placeholder {
                /* Firefox 18- */
                color: rgba(255, 255, 255, 0.5) !important;
            }
            &:focus,
            &:active {
                background: transparent;
                border-color: rgba(255, 255, 255, 0.5) !important;
            }
            }
            
            textarea.form-control {
            height: inherit !important;
            margin-top: 5px;
            }
            
            .contactForm {
            .form-control {
                border: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                padding: 0;
            }
            }
            
            .dbox {
                width: 100%;
                // color: rgba(255,255,255,.8);
                margin-bottom: 25px;
                &:last-child() {
                margin-bottom: 0;
                }
                p {
                margin-bottom: 0;
                span {
                    font-weight: 400;
                    color: #000;
                }
                a {
                    color: rgba(0, 0, 0, 0.3);
                }
                }
                .icon {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 1px solid rgba(0, 0, 0, 0.05);
                span {
                    font-size: 20px;
                    color: #000;
                }
                }
                .text {
                width: calc(100% - 50px);
                }
            }
            }
            
    `}
</style>
        </section>
    )
}

export default Contact;