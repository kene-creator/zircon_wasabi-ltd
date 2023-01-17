import { useState } from 'react';
import { Link } from 'react-scroll';
import { v4 as uuidv4 } from 'uuid';
import styles from './CompareSchool.module.css';
import file from '../assets/files.png';
import frame from '../assets/frame.png';
import SchoolData from './SchoolData';

const CompareSchools = () => {
  const [active, setActive] = useState('ACADEMIC STATS');
  const [isChecked, setIsChecked] = useState(false);

  const links = [
    'FINDEET RATING',
    'KEY SCHOOL STATS',
    'ACADEMIC STATS',
    'TEACHER STATS',
    'FEE STRUCTURE'
  ];

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  console.log(isChecked);

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
            <Link
              to={link}
              spy={true}
              smooth={true}
              offset={-230}
              duration={500}
              key={uuidv4()}
              className={`${active === link ? styles.rating_active : ''}`}
              onClick={() => setActive(link)}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      <div className={styles.schools}>
        <div className={styles.hide_all}>
          <img src={file} alt="" className={styles.file_img} />
          <form action="" className="flex_center">
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
            <p className={`ml_sm ${styles.hide_text}`}>Hide all features</p>
          </form>
        </div>
        <div>
          <div className={styles.school_tag}>
            <img src={school1.image} alt="" className={styles.school_img} />
            <p className={`ml_sm ${styles.school_name}`}>{school1.name}</p>
          </div>
        </div>
        <div>
          <div className={styles.school_tag}>
            <img src={school2.image} alt="" className={styles.school_img} />
            <p className={`ml_sm ${styles.school_name}`}>{school2.name}</p>
          </div>
        </div>
        <div>
          <div className={styles.school_tag}>
            <img src={frame} alt="" className={styles.school_img} />
          </div>
        </div>
        <div>
          <div className={styles.school_tag}>
            <img src={frame} alt="" className={styles.school_img} />
          </div>
        </div>
      </div>
      <SchoolData visible={isChecked} />
    </div>
  );
};

export default CompareSchools;
