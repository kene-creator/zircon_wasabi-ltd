import styles from './SchoolData.module.css';
import check from '../assets/check.png';

const SchoolData = (props) => {
  const { visible } = props;

  const tableBodyArray = {
    'FINDEET RATING': {
      'STUDENT-TEACHER RATIO': {
        school1: '89',
        school2: '45'
      },
      'AVERAGE TEACHER SALARY': {
        school1: '2:9',
        school2: ''
      },
      'ONLINE TEACHING': {
        school1: '34',
        school2: '69'
      }
    },
    'KEY SCHOOL STATS': {
      'SCHOOL ID CARD': {
        school1: true,
        school2: true
      },
      'LIBRARY DURATION': {
        school1: 350,
        school2: 300
      },
      'RESUMPTION DATE': {
        school1: 'Soap',
        school2: 'Soap'
      }
    },
    'ACADEMIC STATS': {
      'SCHOOL FEES': {
        school1: 'yes',
        school2: 'Naa'
      },
      'LIBRARY STAT': {
        school1: '233.9',
        school2: '90'
      },
      'CLOSING DATE': {
        school1: 'March',
        school2: 'April'
      }
    },
    'TEACHER STATS': {
      'SCHOOL UNIFORM': {
        school1: 'yes',
        school2: 'Naa'
      },
      STAT: {
        school1: '233.9',
        school2: '90'
      },
      'RESUMPTION DATE': {
        school1: 'Soap',
        school2: 'Bag'
      }
    },
    'FEE STRUCTURE': {
      'SCHOOL BUS': {
        school1: '100',
        school2: '200'
      },
      'LIBRARY BOOKS': {
        school1: '9',
        school2: '90'
      },
      'BREAK TIME': {
        school1: '2pm',
        school2: '1pm'
      }
    }
  };

  const isNumber = (value) => {
    return value !== '' && !isNaN(value);
  };

  const findy = (a, b) => {
    if (Math.ceil(a) > Math.ceil(b)) {
      return (
        <>
          <td className={styles.school_data}>
            {a}
            <div className={styles.check}>
              <img src={check} alt="check mark" />
            </div>
          </td>
          <td className={styles.school_data}>{b}</td>
        </>
      );
    } else {
      return (
        <>
          <td className={styles.school_data}>{a}</td>
          <td className={styles.school_data}>
            {b}
            <div className={styles.check}>
              <img src={check} alt="check mark" />
            </div>
          </td>
        </>
      );
    }
  };

  console.log(typeof Object.entries(tableBodyArray)[0][0]);
  return (
    <>
      {!visible && (
        <table className={styles.contianer}>
          <tbody className={styles.table_body}>
            {Object.entries(tableBodyArray).map((i, e) => {
              return (
                <>
                  <tr key={e}>
                    <th className={styles.table_name} id={i[0]}>
                      {i[0]}
                    </th>
                  </tr>
                  {Object.entries(i[1]).map((v, k) => {
                    return (
                      <tr
                        className={
                          k % 2 === 0 ? styles.bg_light : styles.bg_dark
                        }
                        key={k}
                      >
                        <th className={`${styles.school_information}`}>
                          {v[0]}
                        </th>
                        {isNumber(v[1].school1) && isNumber(v[1].school2) ? (
                          <>{findy(v[1].school1, v[1].school2)}</>
                        ) : (
                          <>
                            <td className={styles.school_data}>
                              {v[1].school1}{' '}
                            </td>
                            <td className={styles.school_data}>
                              {v[1].school2}
                            </td>
                          </>
                        )}
                      </tr>
                    );
                  })}
                </>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default SchoolData;
