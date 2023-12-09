import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const LogoutPage = () => {
    const authContext = useContext(AuthContext);
    return (
      authContext?.logout()
  
    );

}


export default LogoutPage;