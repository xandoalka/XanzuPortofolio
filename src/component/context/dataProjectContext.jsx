import { createContext, useState } from "react";
import { dataProject } from "../../DataProject";

export const DataProject = createContext()

const ProjectProvider = ({children})=>{

    const [data, setData] = useState(dataProject)

    return(
        <DataProject.Provider value={[data, setData]}>
            {children}
        </DataProject.Provider>
    )
}

export default ProjectProvider