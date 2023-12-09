import { useState } from "react";
// import { signupFields } from "../constants/formFields";
import { signupFields } from "../../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input2";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { useNavigate } from "react-router";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    dispatch(
      authActions.signup({
        user: {
          username: signupState.username,
          email: signupState.email,
          age: signupState.age,
          height: signupState.height,
          weight: signupState.weight,
          noOfChildren: signupState.noOfChildren,
          smoker: signupState.smoker,
          password: signupState.password,
          confirmPassword: signupState.confirm,
        },
        role: "customer",
      })
    );
    console.log({
      user: {
        username: signupState.username,
        email: signupState.email,
        age: signupState.age,
        height: signupState.height,
        weight: signupState.weight,
        noOfChildren: signupState.noOfChildren,
        smoker: signupState.smoker,
        password: signupState.password,
        confirmPassword: signupState.confirm,
      },
      role: "customer",
    });
    navigate("/search");
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
