import React from 'react';
import styles from './ProjectDescription.module.css';

const ProjectDescription: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.descriptionLabel}>
        Project Description
      </p>
      <p className={styles.descriptionText}>
        Graphic Design Project
      </p>
    </div>
  );
};

export default ProjectDescription;
