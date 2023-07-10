import { resume_link, technical_skills, tools } from 'data/user_data';
import styles from 'styles/components/toolssection.module.scss';

export const ToolsSection = () => {
  return (
    <section className={styles.tools_section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Skills</h2>
          <div className={styles.list}>
            {technical_skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <h2>Tools</h2>
          <div className={styles.list}>
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.download_resume}>
        <a href={resume_link} download>
          Download Resume
        </a>
      </div>
    </section>
  );
};
