'use client';
import Button from '../ui/Button';
import FormFeedback from '../ui/FormFeedback';
import InputField from '../ui/InputField';
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
    <main className="min-h-screen flex items-center justify-center">
      <section className="border-[1.5px] border-black p-6 rounded-md max-w-full w-[350px]">
        <p className="font-semibold text-xl">SignUp</p>
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
            label="AvatarName"
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
            label="ConfirmPassword"
            onChangeHandler={onConfirmPasswordChangeHandler}
            onBlurHandler={onConfirmPasswordBlurHandler}
          />
          {isConfirmPasswordTouched && !isConfirmPasswordValid && (
            <FormFeedback>Invalid Confirm Password</FormFeedback>
          )}
          <Button type="submit">Sign Up</Button>
        </form>
      </section>
    </main>
  );
}
