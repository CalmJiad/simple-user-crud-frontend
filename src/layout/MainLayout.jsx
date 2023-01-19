import Nav from "../components/Nav";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-secondary min-h-screen">
      <Nav />
      <div className="container mx-auto min-h-[90vh]">{children}</div>
    </div>
  );
};

export default MainLayout;
