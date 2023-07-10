import { high_level_skills, what_do_i_do } from 'data/user_data';
import styles from 'styles/components/skillssection.module.scss';

export const SkillsSection = () => {
  return (
    <section className={styles.skills_section}>
      <h4>{what_do_i_do}</h4>
      <div className={styles.skill_list}>
        {high_level_skills.map((skill) => (
          <div className={styles.skill} key={skill.name}>
            <div className={styles.icon}>{skill.icon}</div>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
