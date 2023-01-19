import MainLayout from "../layout/MainLayout";

const Home = (props) => {
  return (
    <MainLayout>
      <h3 className="h-[75vh] flex justify-center items-center text-2xl">
        Welcome to the simple user management system!
      </h3>
    </MainLayout>
  );
};

export default Home;
