import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Navbar.module.css';
import logo from '../assets/logo.png';
import icons from '../assets/icons.svg';
import avatar from '../assets/avatar.png';

const Navbar = () => {
  const [active, setActive] = useState('Home');

  const links = ['Home', 'About', 'Solution', 'Pricing', 'Contact'];

  return (
    <div className={`flex_between ${styles.navbar_container}`}>
      <div className="flex_center">
        <div>
          <img src={logo} alt="company logo" className={styles.logo_img} />
          <a href="" className={styles.logo}>
            Wasabi ltd
          </a>
        </div>
        <div>
          <ul className={`flex_center ${styles.nav_list}`}>
            {links.map((link) => (
              <li key={uuidv4()}>
                <a
                  href={`#${link}`}
                  className={`${active === link && styles.nav_active}`}
                  onClick={() => setActive(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex_center">
        <div>
          <form action="" className={styles.form_search}>
            <input
              type="text"
              placeholder="search"
              className={styles.form_search_input}
            />
            <button className={styles.btn_search}>
              <svg className={styles.search_icon}>
                <use xlinkHref={`${icons}#search`} />
              </svg>
            </button>
          </form>
        </div>
        <div className="flex_center ml_sm">
          <img src={avatar} alt="avatar" />
          <svg className={styles.arrow}>
            <use xlinkHref={`${icons}#icon-chevron-left`} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
