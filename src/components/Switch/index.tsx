import React, { useState } from "react";
import "./Switch.css";

interface Props {
    toggleTheme(): void,
}

const Switch: React.FC<Props> = ({ toggleTheme }) => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default Switch;