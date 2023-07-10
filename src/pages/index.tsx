import { AboutSection } from 'components/AboutSection';
import { ContactSection } from 'components/ContactSection';
import { HeroSection } from 'components/HeroSection';
import { LoadingPortfolio } from 'components/LoadingPortfolio';
import { PortfolioLinks } from 'components/PortfolioLinks';
import { ProjectsSection } from 'components/ProjectsSection';
import { SkillsSection } from 'components/SkillsSection';
import { ToolsSection } from 'components/ToolsSection';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from 'styles/home.module.scss';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const page_description = `I am a UI/UX designer with over 4 years experience with 
  a passion for conceptualizing and designing digital products. I 
  value creating interface designs that are clear, elegant, and 
  user-friendly for complicated situations. I specialize in Users, 
  from Interfaces to Experiences. My goal is to create things that 
  just work. I Design pixel based solutions for the Web applications 
  & Product, If you're a startup looking for help with designs for 
  your app, a non-profit that wants to make an impact with your 
  website, or a small business that needs a full redesign, I would 
  love to help you find the right solutions that changes your game.`;
  const page_image = '/images/portfolio-image-1.png';

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
        <title>Chizom&apos;s Portfolio</title>
        <meta name='description' content={page_description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />

        {/* Open Graph Meta Tags */}
        <meta property='og:title' content={`Chizom's Portfolio`} />
        <meta property='og:type' content='article' />
        <meta property='og:description' content={page_description} />
        <meta property='og:image' content={page_image} />
        <meta property='og:site_name' content={`Chizom's Portfolio`} />

        {/* Twitter  */}
        <meta name='twitter:title' content={`Chizom's Portfolio`} />
        <meta name='twitter:description' content={page_description} />
        <meta name='twitter:image' content={page_image} />
        <meta
          name='twitter:card'
          content={page_image ? 'summary_large_image' : 'summary'}
        />
        <meta name='twitter:site' content='@chizomway' />
        <meta name='twitter:image:alt' content={`Chizom's Portfolio`} />
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
