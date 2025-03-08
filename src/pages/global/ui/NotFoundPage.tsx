import { Link } from 'react-router-dom';

import styles from './notfound.module.css';

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>페이지를 찾을 수 없습니다</h2>
      <p className={styles.message}>요청하신 페이지는 존재하지 않습니다.</p>
      <Link to="/" className={styles.link}>
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFoundPage;
