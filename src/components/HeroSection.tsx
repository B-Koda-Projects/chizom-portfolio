import Image from 'next/image';
import styles from 'styles/components/herosection.module.scss';
import { HeroSectionIcon } from './FigmaSVGS';
import { email, name, professional_title, resume_link } from 'data/user_data';

export const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.details}>
        <div className={styles.text}>
          <h2>
            <HeroSectionIcon />
            Hello, I’m
          </h2>
          <h1>{name}</h1>
          <h2>{professional_title}</h2>
        </div>
        <div className={styles.link_buttons}>
          <a href={`mailto:${email}?subject=Saying Hi`}>Get In Touch</a>
          <a href={resume_link} download>
            Download Resume
          </a>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src='/images/portfolio-image-1.png'
          alt='portfolio Image'
          width={521}
          height={525}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};
