import { name, social_links } from 'data/user_data';
import Link from 'next/link';
import styles from 'styles/components/portfoliolinks.module.scss';

export const PortfolioLinks = ({ show = false }: { show?: boolean }) => {
  return (
    <section
      className={styles.links}
      // style={show ? { opacity: '1', transform: 'translateY(0%)' } : {}}
    >
      <div>
        <Link href='/' className={styles.logo}>
          {name}
        </Link>
      </div>
      <nav className={styles.navigate}>
        {social_links.map((link) => (
          <a
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            key={link.name}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </section>
  );
};
