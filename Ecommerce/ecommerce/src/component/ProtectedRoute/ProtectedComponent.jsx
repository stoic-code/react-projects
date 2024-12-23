import { useSelector } from "react-redux";

function ProtectedComponent({ role, children }) {
  let userDetail = useSelector((state) => state.user.value);

  if (userDetail?.role === role) {
    return children;
  } else {
    return null;
  }
}

export default ProtectedComponent;
