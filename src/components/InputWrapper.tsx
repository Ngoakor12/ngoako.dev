interface InputWrapperProps {
  children: React.ReactNode;
}

function InputWrapper({ children }: InputWrapperProps) {
  return <div className="contact-form-field">{children}</div>;
}

export default InputWrapper;
