import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const Notification = ({ message }) => {
  return <p className={s.ntf__styles}>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
