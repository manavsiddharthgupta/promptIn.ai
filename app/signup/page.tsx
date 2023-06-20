'use client';
import Image from 'next/image';
import Button from '../ui/Button';
import Card from '../ui/Card';
import FormFeedback from '../ui/FormFeedback';
import InputField from '../ui/InputField';
import GoogleIcon from '@mui/icons-material/Google';
import loginFrame from '../utils/images/loginframe.png';
import Link from 'next/link';
import useInputField from '../utils/hooks/useInputField';

export default function SignUp() {
  const {
    inputValue: avatarName,
    onChangeHandler: onAvatarNameChangeHandler,
    isTouched: isAvatarNameTouched,
    isInputValueValid: isAvatarNameValid,
    onBlurHandler: onAvatarNameBlurHandler,
  } = useInputField((value) => {
    const avatarRegex = /^[A-Za-z0-9]{5,}$/;
    return avatarRegex.test(value);
  });

  const {
    inputValue: password,
    onChangeHandler: onPasswordChangeHandler,
    isTouched: isPasswordTouched,
    isInputValueValid: isPasswordValid,
    onBlurHandler: onPasswordBlurHandler,
  } = useInputField((value) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(value);
  });

  const {
    inputValue: confirmPassword,
    onChangeHandler: onConfirmPasswordChangeHandler,
    isTouched: isConfirmPasswordTouched,
    isInputValueValid: isConfirmPasswordValid,
    onBlurHandler: onConfirmPasswordBlurHandler,
  } = useInputField((value) => {
    return value === password && value !== '';
  });

  return (
    <Card>
      <div className="w-[420px]:min-h-[calc(100vh-72px)] min-h-[calc(100vh-138px)] flex flex-col min-[860px]:flex-row gap-8 items-center justify-center w-[420px]:justify-between h-full transition-all duration-300 ease-in-out">
        <section className="p-6 rounded-md max-w-[350px] w-full basis-[350px] bg-white">
          <p className="font-semibold text-xl">Get Started</p>
          <p className="font-semibold text-xs mt-1 text-gray-500">
            Create your account now
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(avatarName, password, confirmPassword);
            }}
          >
            <InputField
              value={avatarName}
              type="text"
              placeholder="Enter your Avatar Name"
              label="Avatar Name"
              onChangeHandler={onAvatarNameChangeHandler}
              onBlurHandler={onAvatarNameBlurHandler}
            />
            {isAvatarNameTouched && !isAvatarNameValid && (
              <FormFeedback>Invalid Avatar Name</FormFeedback>
            )}
            <InputField
              value={password}
              type="password"
              placeholder="Enter your password"
              label="Password"
              onChangeHandler={onPasswordChangeHandler}
              onBlurHandler={onPasswordBlurHandler}
            />
            {isPasswordTouched && !isPasswordValid && (
              <FormFeedback>Invalid Password</FormFeedback>
            )}
            <InputField
              value={confirmPassword}
              type="password"
              placeholder="Enter your password again"
              label="Confirm Password"
              onChangeHandler={onConfirmPasswordChangeHandler}
              onBlurHandler={onConfirmPasswordBlurHandler}
            />
            {isConfirmPasswordTouched && !isConfirmPasswordValid && (
              <FormFeedback>Invalid Confirm Password</FormFeedback>
            )}
            <Button
              className="bg-black text-white rounded-sm flex items-center justify-center h-9 mt-6 w-full"
              type="submit"
            >
              Sign Up
            </Button>
            <Button
              type="button"
              className="w-full mt-3 h-9 border-black border-2 flex items-center justify-center hover:text-white hover:bg-black transition-all duration-300 ease-in-out rounded"
            >
              <GoogleIcon className="mr-2" />
              Sign In with Google
            </Button>
            <p className="text-[13px] font-normal text-center mt-4">
              Already have an account?{' '}
              <Link className="font-bold hover:underline" href="/signin">
                Sign In
              </Link>
            </p>
          </form>
        </section>
        <div className="hidden min-[420px]:block flex-1">
          <Image className="w-full" src={loginFrame} alt="login-page" />
        </div>
      </div>
    </Card>
  );
}
