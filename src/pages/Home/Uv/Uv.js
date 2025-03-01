import styles from "./Uv.module.scss";

function Uv() {
    return (
        <div className={styles.outerimg}>
            <div className={styles.innerimg}>
                <img src="100c.jpg" alt="productimage" />
            </div>
            <div className={styles.innertext}>
                <h1><span className={styles.innerhead}> ZANDAIRTM 100C Air Purification for ART</span></h1>
                <p className={styles.innerpara}>
                    The portable 100C air purification unit has been 
                    specifically developed to meet the rigorous 
                    demands of ART laboratories.
                </p>
                <p className={styles.innerpara1}>
                As technology has advanced, the necessity  
                to filter air has become more important 
                to the success rates of ART clinics. Air 
                pollutants, dust particles, mould spores,
                dander, pollen, dust mites, cleaning 
                chemicals, volatile organic compounds 
                (VOCs), chemically active compounds
                (CACs), aldehydes, carcinogenic materials, 
                carbon monoxide, viruses and bacteria have 
                a direct influence on a laboratory’s results as
                well as on the health of laboratory workers.



                </p>

                <button className={styles.innerbutton}>LEARN MORE ABOUT PRODUCT</button>
            </div>
        </div>
    );
}

export default Uv;
