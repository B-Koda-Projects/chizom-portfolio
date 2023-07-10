import { projects } from 'data/user_data';
import Image from 'next/image';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import styles from 'styles/components/projectssection.module.scss';

export const ProjectsSection = () => {
  const navigate = (type: string) => {
    const section = document.getElementById(`slider_container`);
    if (type === 'forward') {
      section?.scrollBy(500, 0);
    } else if (type === 'back') {
      section?.scrollBy(-500, 0);
    }
  };

  return (
    <section className={styles.projects_section}>
      <div className={styles.section_header}>
        <h2>Some of my work</h2>
        <div className={styles.slider_buttons}>
          <a onClick={() => navigate('back')}>
            <IoArrowBack />
          </a>
          <a onClick={() => navigate('forward')}>
            <IoArrowForward />
          </a>
        </div>
      </div>
      <div className={styles.slider_container}>
        <div className={styles.slider} id='slider_container'>
          {projects.map((project) => (
            <div className={styles.project} key={project.name}>
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.project_overlay}
              >
                <p>{project.name}</p>
              </a>
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
