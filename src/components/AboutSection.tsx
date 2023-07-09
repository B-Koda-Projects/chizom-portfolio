import Image from 'next/image';
import styles from 'styles/components/aboutsection.module.scss';
import { PlayButton } from './FigmaSVGS';

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
        <p>
          I am a UI/UX designer with over 4 years experience with a passion for
          conceptualizing and designing digital products. I value creating
          interface designs that are clear, elegant, and user-friendly for
          complicated situations. I specialize in Users, from Interfaces to
          Experiences. My goal is to create things that just work. I Design
          pixel based solutions for the Web applications & Product, If
          you&apos;re a startup looking for help with designs for your app, a
          non-profit that wants to make an impact with your website, or a small
          business that needs a full redesign, I would love to help you find the
          right solutions that changes your game.
        </p>
      </div>
    </section>
  );
};
