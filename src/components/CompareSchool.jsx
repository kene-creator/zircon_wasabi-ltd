import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './CompareSchool.module.css';

const CompareSchools = () => {
  const [active, setActive] = useState('ACADEMIC STATS');

  const links = [
    'FINDEET RATING',
    'KEY SCHOOL STATS',
    'TEACHER STATS',
    'FEE STRUCTURE'
  ];
  return (
    <div>
      <div>
        <ul className={`flex_center ${styles.rating_list}`}>
          {links.map((link) => (
            <li key={uuidv4()}>
              <a
                href={`#${link}`}
                className={`${active === link && styles.rating_active}`}
                onClick={() => setActive(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompareSchools;
