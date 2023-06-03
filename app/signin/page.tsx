'use client';
import Button from '../components/Button';
import InputField from '../components/InputField';
import useInputField from '../utils/hooks/useInputField';

export default function SignIn() {
	const { inputValue: avatarName, onChangeHandler: onAvatarNameChangeHandler } =
		useInputField((value) => {
			const avatarRegex = /^[A-Za-z0-9]{5,}$/;
			return avatarRegex.test(value);
		});

	const { inputValue: password, onChangeHandler: onPasswordChangeHandler } =
		useInputField((value) => {
			const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
			return passwordRegex.test(value);
		});
	return (
		<main className="min-h-screen flex items-center justify-center">
			<section>
				<p>SignIn</p>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						console.log(avatarName, password);
					}}
				>
					<InputField
						value={avatarName}
						type="text"
						placeholder="Enter your avatar"
						label="Avatar Name"
						onChangeHandler={onAvatarNameChangeHandler}
					/>
					<InputField
						value={password}
						type="password"
						placeholder="Enter your password"
						label="Password"
						onChangeHandler={onPasswordChangeHandler}
					/>
					<Button type="submit">Sign In</Button>
				</form>
			</section>
		</main>
	);
}
