import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div>
      <p>Home Page</p>
      <Link to="/me">Go to Profile</Link>
    </div>
  );
};

export default HomePage;
