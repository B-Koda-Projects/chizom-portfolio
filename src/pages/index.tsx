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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7500);
  });

  useEffect(() => {
    if (!loading) {
      const sections = Array.from(document.getElementsByTagName('section'));
      const anchor_tags = Array.from(document.getElementsByTagName('a'));
      console.log(anchor_tags);

      const root = document.getElementsByTagName('html')[0];

      const cursor = document.getElementById('custom_cursor') as HTMLElement;
      const pointer = document.getElementById('custom_pointer') as HTMLElement;

      anchor_tags.forEach((tag) => {
        tag.addEventListener('mouseenter', () => {
          console.log('Moused Over');
          // root.style.cssText = `
          // --cursor-background: #ef6616a2 !important;
          // --cursor-pointer: transparent !important;
          // `;
          cursor.style.backgroundColor = '#ef6616a2';
          pointer.style.backgroundColor = 'transparent';

          // document.documentElement.style.setProperty(
          //   ' --cursor-background',
          //   '#ef6616a2'
          // );
          // document.documentElement.style.setProperty(
          //   '--cursor-pointer',
          //   'transparent'
          // );
        });
        tag.addEventListener('mouseout', () => {
          console.log('Moused Out');
          // root.style.cssText = `
          // --cursor-background: transparent;
          // --cursor-pointer: white;
          // `;
          cursor.style.backgroundColor = 'transparent';
          pointer.style.backgroundColor = 'white';
          // document.documentElement.style.setProperty(
          //   ' --cursor-background',
          //   'transparent'
          // );
          // document.documentElement.style.setProperty(
          //   '--cursor-pointer',
          //   'white'
          // );
        });
      });

      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry: any) => {
            console.log(entry.isIntersecting);
            if (entry.isIntersecting) {
              entry.target.style.opacity = `1`;
              entry.target.style.transform = `translateY(0rem)`;
              // } else {
              //   entry.target.style.opacity = `0`;
              //   entry.target.style.transform = `translateY(-10rem)`;
            }
          }),
        {
          rootMargin: '-30%'
        }
      );

      // if (main_target) {
      //   observer.observe(main_target);
      // }
      sections.forEach((section) => {
        observer.observe(section);
      });

      // let target = document.querySelectorAll('section');
      // let innerText = document.querySelector('#feed-section-text');
      // let innerImage = document.querySelector('#feed-section-image');
      // const observer = new IntersectionObserver(
      //   (entries) => {
      //     if (entries[0].isIntersecting) {
      //       innerText.style.transform = 'translate(0)';
      //       innerText.style.opacity = '1';
      //       innerImage.style.transform = 'translateY(0)';
      //       innerImage.style.opacity = '1';
      //     }
      //   },
      //   {
      //     rootMargin: '-50%'
      //   }
      // );
      // observer.observe(target);
    }
  }, [loading]);
  return (
    <>
      <Head>
        <title>Chizom Portfolio</title>
        <meta
          name='description'
          content={`I am a UI/UX designer with over 4 years experience with 
          a passion for conceptualizing and designing digital products. I 
          value creating interface designs that are clear, elegant, and 
          user-friendly for complicated situations. I specialize in Users, 
          from Interfaces to Experiences. My goal is to create things that 
          just work. I Design pixel based solutions for the Web applications 
          & Product, If you're a startup looking for help with designs for 
          your app, a non-profit that wants to make an impact with your 
          website, or a small business that needs a full redesign, I would 
          love to help you find the right solutions that changes your game.`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
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
