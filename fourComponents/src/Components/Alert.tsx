import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Alert = (props: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      <p>{props.children}</p>
    </div>
  );
};

export default Alert;
