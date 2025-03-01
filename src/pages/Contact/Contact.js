import './Contact.scss';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div id="Contact">
      <div className="title">
        <h1 className="contact">Contact us</h1>
        <h4 className="help">We are here to help</h4>
        <p className="desc">Drop us a message below and we'll get back to you as soon as possible.</p>
      </div>

      <div className="contactform">
        <form>
          <label htmlFor="companyname">COMPANY NAME</label>
          <input type="text" id="companyname" name="companyname" /><br />

          <label htmlFor="firstname">FIRST NAME</label>
          <input type="text" id="firstname" name="firstname" />

          <label htmlFor="lastname">LAST NAME</label>
          <input type="text" id="lastname" name="lastname" /><br />

          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="phone">PHONE</label>
          <input type="tel" id="phone" name="phone" /><br />

          <h4>WHICH AREA ARE YOU INTERESTED IN?</h4>

          <div className="checkboxGroup">
            <div>
              <input type="checkbox" id="cleanroom" name="interest" value="Cleanroom" />
              <label htmlFor="cleanroom">Cleanroom / Life Science</label>
            </div>
            <div>
              <input type="checkbox" id="healthcare" name="interest" value="Healthcare" />
              <label htmlFor="healthcare">Healthcare</label>
            </div>
            <div>
              <input type="checkbox" id="airquality" name="interest" value="Indoor Air Quality" />
              <label htmlFor="airquality">Indoor Air Quality</label>
            </div>
            <div>
              <input type="checkbox" id="ambulance" name="interest" value="Ambulance" />
              <label htmlFor="ambulance">Ambulance</label>
            </div>
          </div>

          <label htmlFor="message">MESSAGE</label>
          <textarea id="message" name="message" placeholder="How can we help you?"></textarea><br />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="outermap">
        <div className="map">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.745983426544!2d81.83959287520221!3d17.0233593838031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3f2f68dc329%3A0x4473382eaee4baf8!2sChandrika%20Vilaasini!5e1!3m2!1sen!2sin!4v1740381388335!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mapinfo">
          <h3>Visit Us and Experience Our Hospitality</h3>
          <p>Come experience our warm and welcoming atmosphere firsthand when you visit us!</p>
          <h4>Finance enquiries</h4>
          <p>Contact CFO Peter Ekman at <a href="mailto:Pek@uvmedico.com">Pek@uvmedico.com</a></p>
          <h4>Marketing and Press enquiries</h4>
          <p>Contact CMO Søren Rohde at <a href="mailto:Sro@uvmedico.com">Sro@uvmedico.com</a></p>
        </div>
      </div>
      <div className="founder">
        <h1 className="hd">HospiSteril Management</h1>
        <p className="pd">Do you want to get in touch with our Management team? Learn more about us here.</p>
        <div className="outerfond">
        <div className="founderimg">
          <img src="https://www.siliconindia.com/images/simag_images/uploaded_images/company_logos/269pk.Raghavendra.jpg" alt="founder"  />
        </div>
        <div className="foundercontent">
          <p>Raghavendra Kandakur has worked in the pharmaceutical industry for more than 25 years in various capacities, with exposure to both sales and marketing. He started his career as a medical representative and rose to the position of marketing head. He is known for his ability to build mega brands, which are today among the top 300 brands of the pharma industry, and he has a personal rapport with key opinion leaders in the medical fraternity across the country. His last assignment was with Zuventus Healthcare as General Manager.</p>
          
          <p className="parahead">Raghavendra Kandakur</p>
          <ul className="socialList">
          <li><FaFacebook className="sl" /></li>
          <li><FaTwitter className="sl" /></li>
          <li><FaYoutube className="sl" /></li>
          <li><FaLinkedin className="sl" /></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;