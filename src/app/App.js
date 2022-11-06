import { Routes, Route, Navigate } from "react-router-dom";
import EditUserPage from "./components/EditUserPage";
import Navbar from "./components/Navbar";
import UserPage from "./components/UserPage";
import UsersList from "./components/UsersList";
import Main from "./layouts/Main";
import Users from "./layouts/Users";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="users" element={<Users />}>
          <Route index element={<UsersList />} />
          <Route path=":userId/profile" element={<UserPage />} />
          <Route path=":userId/edit" element={<EditUserPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Route path="/users" component={Users} />
//       <Switch>
//         <Route path="/users/:userId/profile" component={UserPage} />
//         <Route path="/users/:userId/edit" component={EditUserPage} />
//         <Route path="/users" component={UsersList} />
//         <Route path="/" exact component={Main} />
//         <Redirect to="/" />
//       </Switch>
//     </>
//   );
// }

export default App;
