const TextInput = ({ placeholder, className, ...rest }) => {
  return (
    <input
      placeholder={placeholder}
      className={`input input-bordered ${className}`}
      {...rest}
    />
  );
};

export default TextInput;
