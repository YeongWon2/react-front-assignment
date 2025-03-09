import { Link } from 'react-router-dom';

import styles from './home.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <Link to="/form/1" className={styles.link}>
        사무실 대청소 요청하기
      </Link>
      <Link to="/form/2" className={styles.link}>
        영어 과외 요청하기
      </Link>
    </div>
  );
}

export default HomePage;
