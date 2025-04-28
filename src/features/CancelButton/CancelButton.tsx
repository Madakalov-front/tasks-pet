import { Button } from "@/shared/Button";
import { useNavigate } from "react-router-dom";

const CancelButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      title="cancel"
      onClick={() => {
        navigate('/');
      }}
    />
  );
};

export default CancelButton;
