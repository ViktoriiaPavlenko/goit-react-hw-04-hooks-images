import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ fetchImages }) => {
  return (
    <button type="button" onClick={fetchImages} className={styles.button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  fetchImages: PropTypes.func,
};

export default Button;
