import Image from 'next/image';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import styles from 'styles/components/projectssection.module.scss';

export const ProjectsSection = () => {
  const projects = [
    { name: 'Aluta App', image: '/images/projects/project-1.png' },
    { name: 'Betrelate', image: '/images/projects/project-2.png' },
    { name: 'gotrip', image: '/images/projects/project-3.png' },
    { name: 'CIPM', image: '/images/projects/project-4.png' }
  ];

  const navigate = (type: string) => {
    const section = document.getElementById(`slider_container`);
    if (type === 'forward') {
      section?.scrollBy(100, 0);
    } else if (type === 'back') {
      section?.scrollBy(-100, 0);
    }
  };

  return (
    <section className={styles.projects_section}>
      <div className={styles.section_header}>
        <h2>Some of my works</h2>
        <div className={styles.slider_buttons}>
          <span onClick={() => navigate('back')}>
            <IoArrowBack />
          </span>
          <span onClick={() => navigate('forward')}>
            <IoArrowForward />
          </span>
        </div>
      </div>
      <div className={styles.slider_container}>
        <div className={styles.slider} id='slider_container'>
          {projects.map((project) => (
            <div className={styles.project} key={project.name}>
              <div className={styles.project_overlay}>
                <p>{project.name}</p>
              </div>
              <Image
                src={project.image}
                alt={project.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
