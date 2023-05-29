import React from "react";

export interface ButtonConfig {
  class: string;
  displayName: string;
  handleAlert: (btnName: string) => void;
}

interface Props {
  title: string;
  buttonConfigList: ButtonConfig[];
}

const ButtonLayout = (props: Props) => {
  return (
    <div>
      {props.buttonConfigList.map((btnConfig) => (
        <button
          type="button"
          className={btnConfig.class}
          onClick={() => btnConfig.handleAlert(btnConfig.displayName)}
        >
          {btnConfig.displayName}
        </button>
      ))}
    </div>
  );
};

export default ButtonLayout;
