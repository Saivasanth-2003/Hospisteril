import styles from "./Footer.module.scss";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function Footer() {
    const ior = [
        {
            img: "https://uvmedico.com/hubfs/EMIC.jpg",
            name: "Environmental Monitoring in Cleanrooms: Enhancing Product Safety with Far-UVC at 222 nm",
            note: "From pharmaceuticals and biotechnology to semiconductor manufacturing, the cleanliness of...",
        },
    ];

    return (
        <div className={styles.outerfooter}>
            <div className={styles.mainfooter}>
                <div className={styles.footer1}>
                    <h4 className={styles.fh}><span>Head Office</span></h4>
                    <p className={styles.fp}>
                        <span>
                            Raghavendra Kandakur<br />
                            2/A 1103,<br />
                            SIDDHACHAL, Phase 6,<br />
                            Thane West 400601 <br />
                            Maharastra state, India
                        </span>
                    </p>
                    <p className={styles.fe}>
                        <span>E: <span className={styles.ml}>raghu@ramadeus.com</span></span>
                    </p>
                    <p className={styles.fph}><span>+91-9082505570</span></p>
                    <h4 className={styles.fh1}><span>Part of Care222</span></h4>
                    <h1><img className={styles.fimg} src="ram.png" alt="logo" /></h1>
                </div>

                <div className={styles.footer2}>
                    <h4 className={styles.fh2}><span>Sign up for our newsletter</span></h4>
                    <form>
                        <label className={styles.f2l}>Email<span className={styles.imp}>*</span></label>
                        <input type="email" placeholder="Work Email" />
                        <button className={styles.signup}>SIGN UP</button>
                    </form>
                </div>

                <div className={styles.footer3}>
                    <h4 className={styles.fh2}><span>Our Standards</span></h4>
                    <h1><img className={styles.icon} src="https://uvmedico.com/hs-fs/hubfs/ManagementSysCert_ISO9001_14001-2.png?width=150&height=141&name=ManagementSysCert_ISO9001_14001-2.png" alt="im" /></h1>
                    <p className={styles.fp3}><span>ISO 9001 = C733217</span></p>
                    <p className={styles.fp3}><span>ISO 14001 = C733218</span></p>
                </div>

                <div className={styles.footer4}>
                    <div className={styles.fcontainer}>
                        <h4 className={styles.fh2}><span>Latest News On UV medico</span></h4>
                        {ior.map((item, index) => (
                            <div className={styles.fitem} key={index}>
                                <img className={styles.fimage} src={item.img} alt={item.name} />
                                <h3 className={styles.fname}>{item.name}</h3>
                                <p className={styles.fnote}>{item.note}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.fop}>
                            <p className={styles.fpl}>Terms and Conditions | Privacy Policy | Quality and Environmental Policy | Press and Media Kit</p>
                            <p className={styles.fpl}>© 2021 UV Medico A/S.</p>
                    </div>
                </div>
            </div>

            <div className={styles.outer2}>
                <div className={styles.lastfooter}>
                    <div className={styles.logol}>
                        <img className={styles.pf} src="profile.png" alt="footerlogo" />
                        
                    </div>
                    <div className={styles.social}>
                        <FaFacebook className={styles.sl} />
                        <FaTwitter className={styles.sl} />
                        <FaYoutube className={styles.sl} />
                        <FaLinkedin className={styles.sl} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
