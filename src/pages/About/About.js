import React from 'react';
import styles from './About.module.scss';
function About() {
  return (
    <div>

<div className={styles.bgimg}>
  <div className={styles.head}>
    <h1>About Us</h1>
  </div>

  <div className={styles.intro}>
    <h5>
      HospiSteril is founded with the objective of bringing a paradigm shift in the way business is conducted.
      Instead of operating in a selected segment, our aim is to start from the conceptual stage to give a logical 
      conclusion by operationalizing the same into a business entity.
    </h5>
  </div>


  <div className={styles.expertise}>
    <h3>Our Expertise</h3>
    <ul className={styles.list}>
      <li>Marketing third-party products and acting as a liaising agency for technological and innovative products.</li>
      <li>Product development, project finance, and assisting in administrative/manufacturing setups.</li>
      <li>Providing technical know-how to individuals, firms, industrial concerns, and business enterprises.</li>
      <li>Management consultancy services across various sectors, including skill development and leadership assessment.</li>
    </ul>
  </div>
</div>


<div className={styles.foundation}>
  <h1><span className={styles.spa}>Our</span> Foundation</h1>
  <div className={styles.flex}>
    <div className={styles.fimage}>
      <img 
        src="https://t3.ftcdn.net/jpg/08/37/18/56/360_F_837185652_iRaOUTjrcjta0xIGD6HhpMWKIHiugANu.jpg" 
        alt="foundation" 
      />
    </div>
    <div className={styles.fcontent}>
      <p>
        Our foundation is based on the principles of integrity, honesty, and transparency. 
        We believe in the power of collaboration and partnership to create a better future for all.
      </p>
    </div>
  </div>
</div>


<div className={styles.founder}>
  <h1 className={styles.hd}><span className={styles.undu}>Our</span> Founder</h1>
  <div className={styles.outerfond}>
    <div className={styles.founderimg}>
      <img 
        src="https://www.siliconindia.com/images/simag_images/uploaded_images/company_logos/269pk.Raghavendra.jpg" 
        alt="founder"  
      />
    </div>
    <div className={styles.foundercontent}>
      <p>
        Raghavendra Kandakur has worked in the pharmaceutical industry for more than 25 years in various capacities,
        with exposure to both sales and marketing. He started his career as a medical representative and rose to the 
        position of marketing head. He is known for his ability to build mega brands, which are today among the top 
        300 brands of the pharma industry, and he has a personal rapport with key opinion leaders in the medical 
        fraternity across the country. His last assignment was with Zuventus Healthcare as General Manager.
      </p>
      <p className={styles.parahead}>Raghavendra Kandakur</p>
    </div>
  </div>
</div>




    </div>



  );
}

export default About;