import { name } from 'data/user_data';
import styles from 'styles/components/loadingportfolio.module.scss';

export const LoadingPortfolio = () => {
  return (
    <div className={styles.loading_portfolio}>
      <div className={styles.content}>
        <h1>{name}</h1>
        <div className={styles.loader}>
          <div className={styles.loader_progress}></div>
        </div>
      </div>
    </div>
  );
};
