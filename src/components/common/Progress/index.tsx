import React from 'react';
import styles from './Progress.module.scss';
import { Progress } from '@/Interface';

export default function CommonProgress({progress} : Progress) {
    return (
        <div className={styles.progressMain}>
            <progress className="progress progress-secondary w-full" value={progress} max="100"></progress>
        </div>
    )
}
