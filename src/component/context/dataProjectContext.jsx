import { createContext, useEffect, useState } from "react";

export const DataProject = createContext()

const ProjectProvider = ({ children }) => {
   const [data, setData] = useState([])

   useEffect(() => { getData() }, [])
   async function getData() {
      const res = await fetch('https://xanzu-postgresql.vercel.app/project')
      const data = await res.json()
      setData(data.reverse())
   }

   return (
      <DataProject.Provider value={[data, setData]}>
         {children}
      </DataProject.Provider>
   )
}

export default ProjectProvider