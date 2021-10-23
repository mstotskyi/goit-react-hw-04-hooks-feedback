import PropTypes from 'prop-types';
import styles from 'components/NotificationMsg/NotificationMsg.module.css';

export default function NotificationMsg({ message }) {
  return <p className={styles.message}>{message}</p>;
}

NotificationMsg.propTypes = {
  message: PropTypes.string.isRequired,
};
