import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [cookie, setCookie] = useCookies(["userJWT"]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie.JWT) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <p>Profile page</p>
    </>
  );
};

export default Profile;
