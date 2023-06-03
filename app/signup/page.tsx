"use client"
import Button from "../components/Button";
import InputField from "../components/InputField";
import useInputField from "../utils/hooks/useInputField";

export default function SignUp() {
  const {inputValue: avatarName, onChangeHandler: onAvatarNameChangeHandler} = 
    useInputField((value) => {
      
      const avatarRegex = /^[A-Za-z0-9]{5,}$/;
      return avatarRegex.test(value);
    })

  const {inputValue: password, onChangeHandler: onPasswordChangeHandler}= 
    useInputField((value) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return passwordRegex.test(value);
    })

  const {inputValue: confirmPassword, onChangeHandler: onConfirmPasswordChangeHandler}= 
    useInputField((value) => {
      if (password.trim() === "") {
        return false;
      }
      return value === password; 
    })
  
    const isPasswordEmpty = password.trim() === "";
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section>
        <p>SignUp</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if(avatarName.trim() === ""){
              console.log("Avatar name cannot be empty")
            }
            else if (isPasswordEmpty) {
              console.log("Password cannot be empty");
            } else if (password === confirmPassword) {
              console.log(avatarName, password, confirmPassword);
            } else {
              console.log("Passwords do not match");
            }
          }}
          >
          <InputField
            value={avatarName}
            type="text"
            placeholder="Enter your Avatar Name"
            label="AvatarName"
            onChangeHandler={onAvatarNameChangeHandler}
            />
          
          <InputField
            value={password}
            type="password"
            placeholder="Enter your password"
            label="Password"
            onChangeHandler={onPasswordChangeHandler}
            />

          <InputField
            value={confirmPassword}
            type="password"
            placeholder="Enter your password again"
            label="ConfirmPassword"
            onChangeHandler={onConfirmPasswordChangeHandler}
            />

            <Button type="submit">Sign Up</Button>
        </form>
      </section>
    </main>
  );
}
