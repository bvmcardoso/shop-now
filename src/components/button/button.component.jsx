/** @format */
import './button.styles.scss';
/*
Normal button
Inverted button
Google Sign In
*/
const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...other_props }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...other_props}
    >
      {children}
    </button>
  );
};

export default Button;
