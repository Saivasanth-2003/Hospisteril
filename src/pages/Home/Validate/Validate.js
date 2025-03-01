import styles from './Validate.module.scss';

function Validate() {
    return (
        <div className={styles.outer}>
            <div className={styles.vbub}>
                <h1 className={styles.he}><span>Validate Before You <br />Buy</span></h1>
                <h4 className={styles.hd}><span>Test UV222 Technology for Free</span></h4>
                <p className={styles.pf}>
                    <span>Experience the power of UV222 technology with our <b>"Validate Before You Buy"</b><br />
                    program. Test it at no cost to ensure it meets your decontamination and safety<br />
                    standards.</span>
                </p>
                <h4 className={styles.hd}><span>Achieve Compliance with Annex 1</span></h4>
                <p className={styles.pf}>
                    <span>UV222 lamps enhance your Contamination Control Strategy (CCS), reduce <br />
                    bioburden, and minimize the risk of Cleanroom Excursions—helping you stay <br />
                    compliant and safe.</span>
                </p>
                <h4 className={styles.bold}><span>Try it today, risk-free!</span></h4>
                <button className={styles.gt}>GET STARTED WITH UV222 NOW</button>
            </div>
            <div className={styles.image_con}>
                <img 
                    src="https://uvmedico.com/hs-fs/hubfs/Vertex-222-01%20(1).png?width=900&height=900&name=Vertex-222-01%20(1).png" 
                    alt="meter" 
                />
            </div>
        </div>
    );
}

export default Validate;
