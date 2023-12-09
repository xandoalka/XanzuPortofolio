import { Outlet } from "react-router-dom";
import Nav from "./component/Nav";
import ProjectProvider from "./component/context/dataProjectContext";


export default function App() {

  return (
    <ProjectProvider>
      <Nav></Nav>
      <Outlet></Outlet>
    </ProjectProvider>
  )
}