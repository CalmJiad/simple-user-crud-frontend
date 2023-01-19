import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";

const AddUser = (props) => {
  const [user, setUser] = useState({});

  const handleSubmit = () => {
    console.log(user);
    // fetch("http://localhost:3000/api/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // });
  };

  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center min-h-[80vh]">
        <h1 className="text-3xl font-bold text-center pb-6">Add Admin/User</h1>
        <div className=" space-y-5">
          <TextInput
            onChange={(e) =>
              setUser((prev) => ({ ...prev, name: `${e.target.value}` }))
            }
            placeholder="Name"
            type="text"
            className="w-full"
          />
          <TextInput
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: `${e.target.value}` }))
            }
            placeholder="Email"
            type="email"
            className="w-full"
          />
          <TextInput
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: `${e.target.value}` }))
            }
            placeholder="Password"
            type="password"
            className="w-full"
          />
          <div className="flex justify-around items-center">
            <RadioInput
              value="admin"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, role: `${e.target.value}` }))
              }
              label="Admin"
              name="role"
              defaultChecked
            />
            <RadioInput
              value="user"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, role: `${e.target.value}` }))
              }
              label="User"
              name="role"
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-primary w-full">
            Add User
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default AddUser;
