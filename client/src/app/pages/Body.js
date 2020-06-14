import React from "react";
import "./Body.css";
import "./media.css";
import image from "./images/lock.png";
import image2 from "./images/share.png";
import image3 from "./images/editor.png";
import image4 from "./images/graphic.png";



function Body() {
  return (
  <div>
  
   <section id="section-c" className="grid">
            <div className="content-wrap">
                <div className="top">
                    <h3>Features</h3>
                    <p>We offer our users various ranges of services and advantages</p>
                </div>

                <div className="features">
                    <div className="card one">
                        <div className="left">
                            <img src={image} alt="access" />
                        </div>
                        <div className="right">
                            <h5>Security</h5>
                            <p>Your CV are never saved on our database which anomise our users and keep your vital CV confident</p>
                            <a href="#">Learn more <i className="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="card two">
                        <div className="left">
                            <img src={image2}  alt="access" />
                        </div>
                        <div className="right">
                            <h5>24 Hours Access</h5>
                            <p>Our platfrom is available for usage 24/7. You can always make your CV on the go wherever and whenever</p>
                            <a href="#">Learn more <i className="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="card three">
                        <div className="left">
                            <img src={image3} alt="print" />
                        </div>
                        <div className="right">
                            <h5>Print Out</h5>
                            <p>You can download, Print out and send your CV to your mail .Whatever you choose, we've got you covered</p>
                            <a href="#">Learn more <i className="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="card four">
                        <div className="left">
                            <img src={image4} alt="Easy" />
                        </div>
                        <div className="right">
                            <h5>Different Formats</h5>
                            <p> Our platfrom supports input raw data and json data which will be populated to give you a pdf, latex and json formated CV</p>
                            <a href="#">Learn more <i className="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  
   </div>
     
  
  );
}
export default Body;