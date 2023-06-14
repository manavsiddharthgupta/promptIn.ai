'use client';
import Button from '../ui/Button';
import FormFeedback from '../ui/FormFeedback';
import InputField from '../ui/InputField';
import useInputField from '../utils/hooks/useInputField';

export default function SignIn() {
  const {
    inputValue: avatarName,
    onChangeHandler: onAvatarNameChangeHandler,
    isInputValueValid: isAvatarNameValid,
    onBlurHandler: onAvatarNameBlurHandler,
    isTouched: isAvatarNameTouched,
  } = useInputField((value) => {
    const avatarRegex = /^[A-Za-z0-9]{5,}$/;
    return avatarRegex.test(value);
  });

  const {
    inputValue: password,
    onChangeHandler: onPasswordChangeHandler,
    isInputValueValid: isPasswordValid,
    onBlurHandler: onPasswordBlurHandler,
    isTouched: isPasswordTouched,
  } = useInputField((value) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(value);
  });
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="border-[1.5px] border-black p-6 rounded-md max-w-full w-[350px]">
        <p className="font-semibold text-xl">SignIn</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(avatarName, password);
          }}
          className="mt-4"
        >
          <InputField
            value={avatarName}
            type="text"
            placeholder="Enter your avatar"
            label="Avatar Name"
            onChangeHandler={onAvatarNameChangeHandler}
            onBlurHandler={onAvatarNameBlurHandler}
          />
          {isAvatarNameTouched && !isAvatarNameValid && (
            <FormFeedback>Invalid Avatar name</FormFeedback>
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
          <Button type="submit">Sign In</Button>
        </form>
      </section>
    </main>
  );
}
