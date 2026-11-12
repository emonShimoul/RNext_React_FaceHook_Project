import { Navigate, Outlet } from "react-router";
import Header from "../components/common/Header";
import { useAuth } from "../hooks/useAuth";
import ProfileProvier from "../providers/ProfileProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.authToken ? (
        <>
          <ProfileProvier>
            <Header />
            <main className="mx-auto max-w-255 py-8">
              <div className="container">
                <Outlet />
              </div>
            </main>
          </ProfileProvier>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
