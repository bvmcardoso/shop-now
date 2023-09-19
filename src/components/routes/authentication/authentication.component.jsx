/** @format */
import SignInForm from '../../sign-in-form/sign-in-form.component';
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import './authentication.styles.scss';
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
