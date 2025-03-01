 import styles from './Zandair100c.module.scss';
function Zandair100c() {
  return (

    <div className={styles.outer}>
      {/* Image Section */}
      <div className={styles.image}>
        <img src="100c.jpg" alt="Zandair100c" />
      </div>
      <div className={styles.name}>
        <h4>Zandair TM100c <span>Air purification for ART</span></h4>

      </div>

      {/* Introduction */}
      <h6>
      The portable 100C air purification unit has been specifically developed to   <br />
      meet the rigorous demands of ART laboratories.
      </h6>

      {/* Description */}
      <div className={styles.description}>
        <p className={styles.inner}>
          As technology has advanced, the necessity  <br />
          to filter air has become more important  <br />
          to the success rates of ART clinics. Air  <br />
          pollutants, dust particles, mould spores, <br />
          dander, pollen, dust mites, cleaning  <br />
          chemicals, volatile organic compounds  <br />
          (VOCs), chemically active compounds  <br />
          (CACs), aldehydes, carcinogenic materials, <br />
          carbon monoxide, viruses and bacteria have <br />
          a direct influence on a laboratory’s results as  <br />
          well as on the health of laboratory workers.
        </p>

        <p className={styles.para}>
          The ZANDAIR 100C uses a 4-step process  <br />
          to purify the air within the laboratory,  <br />
          using two Activated Carbon Filters, <br />
          Photo-catalytic-oxidation and ultraviolet  <br />
          technology.
        </p>

        <div className={styles.line}></div>

        {/* Key Features */}
        <ul className={styles.list}>
          <li>Activated carbon filters absorbs toxic chemicals and gases</li>
          <li>Micro-particles removed by hospital grade HEPA filter </li>
          <li>Photo-catalytic oxidation destroys toxic chemicals and eliminates odours</li>
          <li>Ultraviolet light renders viruses and bacteria harmless</li>
        </ul>
      </div>

      {/* 4-Step Purification Process */}
      <div>
        <h6 className={styles.head}>
          The ZANDAIR 100C uses a 4-step process to purify the air within the laboratory
        </h6>
        <ul className={styles.headlst}>
          <li>
            1. The front position of the activated carbon filter, with a specially formulated mixture of
            proprietary compounds, absorbs all VOCs and CACs in the laboratory environment
          </li>
          <hr className={styles.hl} />
          <li>2. A second activated carbon filter increases the ‘dwell time’ providing higher adsorption of VOCs and CACs</li>
          <hr className={styles.hl} />
          <li>
            3. Photo-catalytic oxidation converts toxic compounds into benign constituents such as water
            (H₂O) and carbon dioxide (CO₂). The catalyst does not wear out or lose its effectiveness.
          </li>
          <hr className={styles.hl} />
          <li>
            4. Ultraviolet technology, combined with photo-catalytic oxidation, helps reduce germs spread
            through central heating and air-conditioning systems.
          </li>
          <hr className={styles.hl} />
        </ul>
      </div>

      <div className={styles.tableContainer}>
  <table className={styles.specTable}>
    <thead>
      <tr>
        <th colSpan="2">Specification</th>
      </tr>
    </thead>
    <tbody>
      {[
        ["Dimensions", "55 cm X 46 cm X 20 cm"],
        ["Weight", "10.43 Kg"],
        ["Max air flow", "265 CFM / 7.5 m³ per minute"],
        ["Max watts", "110 watts"],
        ["Voltage", "120 V – 60 Hz / 220V – 50 Hz"],
        ["Blower", "Reversed – curved motorized impeller"],
        ["Catalyst", "Metal oxides"],
        ["U.V. range", "254 nm (produces no ozone)"],
        [" Particle filter", " 0.3 micron HEPA"],
        ["Gas adsorption", " Activated carbon media"],
        ["Application", "2,000 sq. feet max. / 185 sq. meters"],
        ["Service", "U.V. lamps – 1 year, Filters – 6 months"],
        ["Warranty", "2 year limited warranty on all components excluding light and filters"],
      ].map(([key, value], index) => (
        <tr key={index}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<div className={styles.tableContainer}>
  <table className={styles.orderTable}>
    <thead>
      <tr>
        <th>Order Code</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {[
        ["FHTIZ100P220V", "ZANDAIR 100C, Air purifier, photo-catalytic chamber, 220V"],
        ["FHTIZRK203", "Replacement UV lamp 8w for ZANDAIR models 100C / 100P"],
        ["FHTIZRK401", "Replacement filter Set for ZANDAIR 100C includes: 2 x activated carbon filters and 1 x HEPA filter"],
      ].map(([code, desc], index) => (
        <tr key={index}>
          <td>{code}</td>
          <td>{desc}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>












    
  );
}

export default Zandair100c;



