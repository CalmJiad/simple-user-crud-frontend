import MainLayout from "../layout/MainLayout";

const UsersList = (props) => {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center min-h-[80vh]">
        <h1 className="text-3xl font-bold text-center pb-6">Users List</h1>
        <div className="space-y-4 w-full">
          <div className="py-2 px-32 flex bg-primary/80 justify-between items-center rounded-xl w-full">
            <p className="text-secondary text-lg">User 1</p>
            <button className="btn btn-secondary px-8">View</button>
          </div>
          <div className="py-2 px-32 flex bg-primary/80 justify-between items-center rounded-xl w-full">
            <p className="text-secondary text-lg">User 2</p>
            <button className="btn btn-secondary px-8">View</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UsersList;
