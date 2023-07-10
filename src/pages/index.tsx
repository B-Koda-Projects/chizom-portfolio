import { AboutSection } from 'components/AboutSection';
import { ContactSection } from 'components/ContactSection';
import { HeroSection } from 'components/HeroSection';
import { LoadingPortfolio } from 'components/LoadingPortfolio';
import { PortfolioLinks } from 'components/PortfolioLinks';
import { ProjectsSection } from 'components/ProjectsSection';
import { SkillsSection } from 'components/SkillsSection';
import { ToolsSection } from 'components/ToolsSection';
import { about_me, name } from 'data/user_data';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from 'styles/home.module.scss';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const page_image = '/images/portfolio-image-1.png';
  const page_title = `${name}'s Portfolio`;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7500);
  });

  useEffect(() => {
    if (!loading) {
      const sections = Array.from(document.getElementsByTagName('section'));
      const anchor_tags = Array.from(document.getElementsByTagName('a'));

      const cursor = document.getElementById('custom_cursor') as HTMLElement;
      const pointer = document.getElementById('custom_pointer') as HTMLElement;

      anchor_tags.forEach((tag) => {
        tag.addEventListener('mouseenter', () => {
          console.log('Moused Over');
          cursor.style.backgroundColor = '#ef6616a2';
          pointer.style.backgroundColor = 'transparent';
        });
        tag.addEventListener('mouseout', () => {
          cursor.style.backgroundColor = 'transparent';
          pointer.style.backgroundColor = 'white';
        });
      });

      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry: any) => {
            console.log(entry.isIntersecting);
            if (entry.isIntersecting) {
              entry.target.style.opacity = `1`;
              entry.target.style.transform = `translateY(0rem)`;
            }
          }),
        {
          rootMargin: '-30%'
        }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });
    }
  }, [loading]);
  return (
    <>
      <Head>
        {/* Basic */}
        <title>{page_title}</title>
        <meta name='description' content={about_me} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />

        {/* Open Graph Meta Tags */}
        <meta property='og:title' content={page_title} />
        <meta property='og:type' content='article' />
        <meta property='og:description' content={about_me} />
        <meta property='og:image' content={page_image} />
        <meta property='og:site_name' content={page_title} />

        {/* Twitter  */}
        <meta name='twitter:title' content={page_title} />
        <meta name='twitter:description' content={about_me} />
        <meta name='twitter:image' content={page_image} />
        <meta
          name='twitter:card'
          content={page_image ? 'summary_large_image' : 'summary'}
        />
        <meta name='twitter:site' content='@ChizomEgeonu' />
        <meta name='twitter:image:alt' content={page_title} />
      </Head>
      <main className={styles.main} id='main_page'>
        {loading ? (
          <LoadingPortfolio />
        ) : (
          <>
            <PortfolioLinks show />
            <HeroSection />
            <SkillsSection />
            <AboutSection />
            <ToolsSection />
            <ProjectsSection />
            <ContactSection />
            <PortfolioLinks />
          </>
        )}
      </main>
    </>
  );
}
