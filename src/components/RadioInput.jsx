const RadioInput = ({ name, label, ...rest }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text text-lg">{label}</span>
        <input
          type="radio"
          name={name}
          className="radio checked:bg-green-500 radio-md ml-4 "
          {...rest}
        />
      </label>
    </div>
  );
};

export default RadioInput;
