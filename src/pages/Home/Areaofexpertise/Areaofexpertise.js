import styles from './Areaofexpertise.module.scss';

function Areaofexpertise() {
    const data = [
        {
            img: `1_page_0001.jpg`,
            name: `Good Manufacturing Practice System`,
        },
        {
            img: `1_page_0001.jpg`,
            name: `Certificate of Compliance`,
        },
        {
            img: `3_page_0001.jpg`,
            name: `ISO 9001:2015 QMS`,
        },
        {
            img: `4_page_0001.jpg`,
            name: `Quality Management System`,
        },
        {
            img: `5_page-0001.jpg`,
            name: `Certificate of Recognition`,
        },
        {
            img: `1_page_0001.jpg`,
            name: `ISO 13485:2016 QMSMD`,
        },
    ];

    return (
        <div className={styles.aoe}>
            <div className={styles.title}> 
                <h2><span>Certifications</span></h2>
            </div>
            <div className={styles.grid_container}>
                {data.map((d, index) => (
                    <div className={styles.grid_item} key={index}>
                        <div className={styles.img_container}>
                            <img src={d.img} alt={d.name} />
                        </div>
                        <div className={styles.name_container}>
                            <h4>{d.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.bt}>
                <button className={styles.b}>GET CONTACTED BY UV MEDICO</button>
            </div>
        </div>
    );
}

export default Areaofexpertise;
