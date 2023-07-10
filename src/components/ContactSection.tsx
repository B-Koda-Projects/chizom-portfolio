import { email } from 'data/user_data';
import styles from 'styles/components/contactsection.module.scss';

export const ContactSection = () => {
  return (
    <section className={styles.contact_section}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h3>Have a cool project you want to work on?</h3>
          <p>
            &quot;Ideas are meant to be shared. They only become valuable when
            they are expressed, nurtured, and brought to life.&quot; - Chat GPT
          </p>
        </div>
        <a href={`mailto:${email}?subject=Saying Hi`}>Get In Touch</a>
      </div>
    </section>
  );
};
