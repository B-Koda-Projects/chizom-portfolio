import Image from 'next/image';
import styles from 'styles/components/herosection.module.scss';
import { HeroSectionIcon } from './FigmaSVGS';

export const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.details}>
        <div className={styles.text}>
          <h2>
            <HeroSectionIcon />
            Hello, I’m
          </h2>
          <h1>CHIZOM EGEONU</h1>
          <h2>Product & UI/UX Designer</h2>
        </div>
        <div className={styles.link_buttons}>
          <a>Get In Touch</a>
          <a>Download Resume</a>
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
