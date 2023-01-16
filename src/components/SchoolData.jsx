import styles from './SchoolData.module.css';

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
  const findeetRating = Object.entries(tableBodyArray)[0][1];
  const keySchoolStat = Object.entries(tableBodyArray)[1][1];
  const academicStat = Object.entries(tableBodyArray)[2][1];
  const feeStructure = Object.entries(tableBodyArray)[3][1];

  return (
    <>
      {!visible && (
        <table className={styles.contianer}>
          <tbody className={styles.table_body}>
            <tr>
              <th className={styles.table_name}>FINDEET RATING</th>
            </tr>
            {Object.keys(findeetRating).map((key1, i) => (
              <tr
                key={key1}
                className={`${i % 2 ? styles.bg_dark : styles.bg_light}`}
              >
                <th className={`${styles.school_information}`}>{key1}</th>
                {Object.keys(findeetRating[key1]).map((key2) => (
                  <td key={key2} className={styles.school_data}>
                    {`${findeetRating[key1][key2]}`}
                    <td>r</td>
                  </td>
                ))}
              </tr>
            ))}

            <tr>
              <th className={styles.table_name}>KEY SCHOOL STATS</th>
            </tr>
            {Object.keys(keySchoolStat).map((key1, i) => (
              <tr
                key={key1}
                className={`${i % 2 ? styles.bg_dark : styles.bg_light}`}
              >
                <th className={`${styles.school_information}`}>{key1}</th>
                {Object.keys(keySchoolStat[key1]).map((key2) => (
                  <td
                    key={key2}
                    className={styles.school_data}
                  >{`${keySchoolStat[key1][key2]}`}</td>
                ))}
              </tr>
            ))}
            <tr>
              <th className={styles.table_name}>ACADEMIC STATS</th>
            </tr>
            {Object.keys(academicStat).map((key1, i) => (
              <tr
                key={key1}
                className={`${i % 2 ? styles.bg_dark : styles.bg_light}`}
              >
                <th className={`${styles.school_information}`}>{key1}</th>
                {Object.keys(academicStat[key1]).map((key2) => (
                  <td
                    key={key2}
                    className={styles.school_data}
                  >{`${academicStat[key1][key2]}`}</td>
                ))}
              </tr>
            ))}
            <tr>
              <th className={styles.table_name}>FEE STRUCTURE</th>
            </tr>
            {Object.keys(feeStructure).map((key1, i) => (
              <tr
                key={key1}
                className={`${i % 2 ? styles.bg_dark : styles.bg_light}`}
              >
                <th className={`${styles.school_information}`}>{key1}</th>
                {Object.keys(feeStructure[key1]).map((key2) => (
                  <td
                    key={key2}
                    className={styles.school_data}
                  >{`${feeStructure[key1][key2]}`}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default SchoolData;
