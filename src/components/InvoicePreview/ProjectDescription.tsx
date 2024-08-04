import React from 'react';
import styles from './ProjectDescription.module.css';

interface ProjectDescriptionProps {
  description: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ description }) => {
  return (
    <div className={styles.container}>
      <p className={styles.descriptionLabel}>Project Description</p>
      <p className={styles.descriptionText}>{description || ''}</p>
    </div>
  );
};

export default ProjectDescription;
