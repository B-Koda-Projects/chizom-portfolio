import styles from 'styles/components/skillssection.module.scss';
import { HTMLCSSIcon, UIUXIcon, UserResearchIcon } from './FigmaSVGS';

export const SkillsSection = () => {
  return (
    <section className={styles.skills_section}>
      <h4>
        I conceptualize ideas for human centered digital products that create
        meaningful impact
      </h4>
      <div className={styles.skill_list}>
        <div className={styles.skill}>
          <div className={styles.icon}>
            <UIUXIcon />
          </div>
          <h2>UI/UX Design</h2>
          <p>
            I Create intuitive user centered interface designs for mobile and
            web applications
          </p>
        </div>
        <div className={styles.skill}>
          <div className={styles.icon}>
            <UserResearchIcon />
          </div>
          <h2>User Research</h2>
          <p>
            The success of every product, brand or company is largely determined
            by its visual branding. I offer eye-catching brand elements
          </p>
        </div>
        <div className={styles.skill}>
          <div className={styles.icon}>
            <HTMLCSSIcon />
          </div>
          <h2>HTML/CSS</h2>
          <p>
            With a basic knowledge of HTML/CSS I am able to design responsive
            web components and layouts.
          </p>
        </div>
      </div>
    </section>
  );
};
