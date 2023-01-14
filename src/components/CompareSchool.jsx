import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './CompareSchool.module.css';

const CompareSchools = () => {
  const [active, setActive] = useState('ACADEMIC STATS');

  const links = [
    'FINDEET RATING',
    'KEY SCHOOL STATS',
    'ACADEMIC STATS',
    'TEACHER STATS',
    'FEE STRUCTURE'
  ];

  const school1 = {
    name: 'Deal School District',
    image: 'https://www.collinsdictionary.com/images/full/school_309241295.jpg'
  };
  const school2 = {
    name: 'Salem City School, New Jersey',
    image: `https://img.freepik.com/free-vector/school-building-educational-institution-college_107791-1051.jpg?w=2000`
  };

  return (
    <div className={styles.section_compare}>
      <div>
        <ul className={`flex_center ${styles.rating_list}`}>
          {links.map((link) => (
            <li
              key={uuidv4()}
              className={`${active === link ? styles.rating_active : ''}`}
              onClick={() => setActive(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompareSchools;
