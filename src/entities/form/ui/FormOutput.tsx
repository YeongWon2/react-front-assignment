import { TOutPutDTO } from '@/entities/form';

import styles from './form-output.module.css';

interface IFormOutputProps {
  output: TOutPutDTO;
}

function FormOutput({ output }: IFormOutputProps) {
  const formattedJson = JSON.stringify(output, null, 2);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>폼 제출 결과</h2>
      <pre className={styles.jsonOutput}>
        <code>{formattedJson}</code>
      </pre>
    </div>
  );
}

export default FormOutput;
