import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

// <></> called as fragment in react and is used for enclosing multiple components like a div without adding extra element to DOM
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
