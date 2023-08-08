import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface FormBtnText {
  btnText: string;
}

export default function FormSubmitButton({ btnText }: FormBtnText) {
  const navigate = useNavigate();

  function handleClick() {
    // console.log("userLoggedIn:", userState.userLoggedIn)
    // userState.userLoggedIn = true
    // console.log("userLoggedIn:", userState.userLoggedIn)
    navigate("/");
  }

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      variant="success"
      type="submit">
      {btnText}
    </Button>
  );
}
