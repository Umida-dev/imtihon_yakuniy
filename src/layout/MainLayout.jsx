import { Outlet } from "react-router-dom";
import NavBar from "../components/NavigationBar";
import Footer from "../components/AppFooter";

function MainLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
