import { Navigate, Outlet } from "react-router";
import Header from "../components/common/Header";
import { useAuth } from "../hooks/useAuth";
import PostProvider from "../providers/PostProvider";
import ProfileProvier from "../providers/ProfileProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.authToken ? (
        <>
          <PostProvider>
            <ProfileProvier>
              <Header />
              <main className="mx-auto max-w-255 py-8">
                <div className="container">
                  <Outlet />
                </div>
              </main>
            </ProfileProvier>
          </PostProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
