import styles from './Hero.module.scss';
function Hero() {
    return (
    <div className={styles.container}>
      {/* Background Video */}
      <video 
        className={styles.video} 
        autoPlay 
        loop 
        muted
      >
        <source src="hospivedio.mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className={styles.overlay}>
        <h1 className={styles.title}>Welcome to Our Page</h1>
        <p className={styles.description}>HospiSteler is founded with objective of bringing paradigm shift in the way business is conducted, instead of from operating in selected segment , <br></br>our aim is to start from working from the conceptual stage to give logical conclusion by operationalizing the same in to business entity.</p>
        <div className={styles.btooo}>

        <button className={styles.button}>
          Learn more About Us
        </button>
        <button className={styles.button}>CONTACT US</button>
      </div>
      </div>
    </div>
    );
}

export default Hero;