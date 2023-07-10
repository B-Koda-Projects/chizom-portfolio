import Image from 'next/image';
import styles from 'styles/components/aboutsection.module.scss';
import { PlayButton } from './FigmaSVGS';
import { about_me } from 'data/user_data';

export const AboutSection = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.video}>
        <span className={styles.play_button}>
          <PlayButton />
        </span>
        <Image
          src='/images/portfolio-image-2.png'
          alt='Video'
          height={525}
          width={521}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className={styles.text}>
        <h2>About Me</h2>
        <p>{about_me}</p>
      </div>
    </section>
  );
};
