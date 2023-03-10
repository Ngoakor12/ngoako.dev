import React from "react";

function InputErrorMessage({ message }: { message: string | undefined }) {
  return <span className="form-error-message">{message}</span>;
}

export default InputErrorMessage;
