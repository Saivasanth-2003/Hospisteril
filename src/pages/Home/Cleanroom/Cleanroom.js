import styles from './Cleanroom.module.scss';

function Cleanroom() {
    const describe = [
        {
            img: `100c.jpg`,
            name: `ZANDAIR TM 100C`,
            dec: `Air Purification for ART`,
        },
        {
            img: `100p.jpg`,
            name: `ZANDAIR TM 100C`,
            dec: `Air Purification for Pathology`,
        },
        {
            img: `pcco3.jpg`,
            name: `ZANDAIR PCOC TM 3`,
            dec: `Air Purification Unit`,
        },
        
    ];

    return (
        <div className={styles.container}>  
            <div className={styles.clean}>
                <h1><span className={styles.un}>Our</span> Products</h1>
            </div>
            <div className={styles.gdcontainer}>
                {describe.map((item, index) => (
                    <div className={styles.gd_item} key={index}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p className={styles.dec_item}>{item.dec}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cleanroom;
