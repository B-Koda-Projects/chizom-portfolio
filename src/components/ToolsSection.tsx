import styles from 'styles/components/toolssection.module.scss';

export const ToolsSection = () => {
  return (
    <section className={styles.tools_section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Skills</h2>
          <div className={styles.list}>
            <span>User Research</span>
            <span>Wireframing</span>
            <span>Prototyping</span>
            <span>Collaboration</span>
            <span>Empathy</span>
            <span>HTML/CSS</span>
            <span>Human Computer Interaction</span>
            <span>Persona Creation</span>
            <span>Experience Mapping</span>
            <span>Design System</span>
          </div>
        </div>
        <div className={styles.right}>
          <h2>Tools</h2>
          <div className={styles.list}>
            <span>Figma</span>
            <span>Adobe XD</span>
            <span>Adobe Photoshop</span>
            <span>Sketch</span>
            <span>Framer</span>
          </div>
        </div>
      </div>
      <div className={styles.download_resume}></div>
    </section>
  );
};
