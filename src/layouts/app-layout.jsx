import Header from "@/components/header";
import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/tarun910/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Tarun Namdev
        </a>
      </div>
    </div>
  );
};

export default AppLayout;
