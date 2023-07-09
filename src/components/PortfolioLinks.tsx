import Link from 'next/link';
import styles from 'styles/components/portfoliolinks.module.scss';

export const PortfolioLinks = ({ show = false }: { show?: boolean }) => {
  return (
    <section
      className={styles.links}
      style={show ? { opacity: '1', transform: 'translateY(0%)' } : {}}
    >
      <div>
        <Link href='/' className={styles.logo}>
          CHIZOM EGEONU
        </Link>
      </div>
      <nav className={styles.navigate}>
        <a
          href='https://www.linkedin.com/in/chizom-egeonu-9922b5123/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Linkedin
        </a>
        <a
          href='https://twitter.com/ChizomEgeonu'
          target='_blank'
          rel='noopener noreferrer'
        >
          Twitter
        </a>
        <a
          href='https://www.behance.net/chizomway'
          target='_blank'
          rel='noopener noreferrer'
        >
          Behance
        </a>
      </nav>
    </section>
  );
};
