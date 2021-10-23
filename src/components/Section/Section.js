import PropTypes from 'prop-types';
import styles from 'components/Section/Section.module.css';
export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
}

Section.propZTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
