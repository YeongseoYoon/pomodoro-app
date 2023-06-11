import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as ButtonIcon } from "@fortawesome/react-fontawesome";

import { Button } from "./Button.styled";

interface ControlButtonProps {
  isTimerPlaying: boolean;
  onClick: () => void;
}

function ControlButton({ isTimerPlaying, onClick }: ControlButtonProps) {
  return (
    <>
      <Button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        onClick={onClick}
      >
        <ButtonIcon icon={!isTimerPlaying ? faPlay : faPause} />
      </Button>
    </>
  );
}

export default ControlButton;
