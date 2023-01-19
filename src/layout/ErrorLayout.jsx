import { useEffect, useState } from "react";
import { ImSad } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

const ErrorLayout = (props) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer === 0) {
      navigate("/");
    }

    const timerId = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    // this should be discussed
    return () => {
      clearTimeout(timerId);
    };
  }, [timer]);

  return (
    <div className="bg-primary">
      <div className="container mx-auto flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col justify-center items-center space-y-6">
          <ImSad className="text-8xl" />
          <h1 className="text-2xl">
            404 Error. Not found! <br /> Returning to{" "}
            <Link className="text-green-700" to={"/"}>
              home.
            </Link>
          </h1>
          <span className="countdown font-mono text-6xl">
            <span style={{ "--value": timer }}></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ErrorLayout;
