'use client';
import Link from 'next/link';
import Button from '../ui/Button';
import CheckBox from '../ui/CheckBox';
import FormFeedback from '../ui/FormFeedback';
import InputField from '../ui/InputField';
import useInputField from '../utils/hooks/useInputField';
import GoogleIcon from '@mui/icons-material/Google';
import loginFrame from '../utils/images/loginframe.png';
import Image from 'next/image';
import Card from '../ui/Card';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const {
    inputValue: avatarName,
    onChangeHandler: onAvatarNameChangeHandler,
    isInputValueValid: isAvatarNameValid,
    onBlurHandler: onAvatarNameBlurHandler,
    isTouched: isAvatarNameTouched,
  } = useInputField('', (value) => {
    const avatarRegex = /^[A-Za-z0-9]{5,}$/;
    return avatarRegex.test(value);
  });

  const {
    inputValue: password,
    onChangeHandler: onPasswordChangeHandler,
    isInputValueValid: isPasswordValid,
    onBlurHandler: onPasswordBlurHandler,
    isTouched: isPasswordTouched,
  } = useInputField('', (value) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(value);
  });

  const router = useRouter();

  const onSubmitHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (
      isAvatarNameTouched &&
      isAvatarNameValid &&
      isPasswordTouched &&
      isPasswordValid
    ) {
      setIsLoading(true);
      setError(null);
      const res = await signIn('credentials', {
        redirect: false,
        avatar: avatarName,
        password: password,
      });

      if (res?.error) {
        console.log(res);
        setError(res.error);
      } else {
        router.push('/');
      }
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <div className="w-[420px]:min-h-[calc(100vh-72px)] min-h-[calc(100vh-138px)] flex flex-col min-[860px]:flex-row gap-8 items-center justify-center w-[420px]:justify-between h-full transition-all duration-300 ease-in-out">
        <section className="p-6 rounded-md max-w-[350px] w-full basis-[350px] bg-white">
          <p className="font-semibold text-xl">Welcome back</p>
          <p className="font-semibold text-xs mt-1 text-gray-500">
            Welcome back! Please enter your details.
          </p>
          <form onSubmit={onSubmitHandler} className="mt-6">
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
            {error && (
              <div className="mt-2">
                <FormFeedback>Invalid Credentials</FormFeedback>
              </div>
            )}
            <div className="flex items-center justify-between mt-4">
              <CheckBox>Remember me</CheckBox>
              <Link
                className="text-[13px] font-normal hover:underline"
                href="/signin"
              >
                Forgot Password
              </Link>
            </div>
            <Button
              className="bg-black text-white rounded-sm flex items-center justify-center h-9 mt-6 w-full"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Sign In'}
            </Button>
            <Button
              type="button"
              onClick={async () => {
                setError(null);
                signIn('google', { callbackUrl: '/' });
              }}
              className="w-full mt-3 h-9 border-black border-2 flex items-center justify-center hover:text-white hover:bg-black transition-all duration-300 ease-in-out rounded"
            >
              <GoogleIcon className="mr-2" />
              Sign In with Google
            </Button>
            <p className="text-[13px] font-normal text-center mt-4">
              Don't have an account?{' '}
              <Link className="font-bold hover:underline" href="/signup">
                Sign up for free
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
