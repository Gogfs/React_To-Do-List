import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [name, setName] = useState("Gabriel Oliveira");

  const [toDo, setToDo] = useState([]);

  const [ loading, setLoading ] = useState(false)
  const [ addLoading, setAddLoading ] = useState(false)
  const [ editLoading, setEditLoading ] = useState(null)
  const [ deleteLoading, setDeleteLoading ] = useState(null)
  

  // Function to load the to-do
  const loadToDo = async () => {
    setLoading(true)

    const { data = [] } = await api.get("/tasks");

    setToDo([...data]);
    
    setLoading(false)
  };

  // Function to add a new the to-do
  const addToDo = async (toDoName) => {
    setAddLoading(true)
    
    const { data: toDo } = await api.post("/tasks", {
      name: toDoName,
    });
    setToDo((currentState) => {
      return [...currentState, toDo];
    });

    setAddLoading(false)
  };

  // Function to remove a to-do
  const removeToDo = async (toDoID) => {
    setDeleteLoading(toDoID)

    await api.delete(`tasks/${toDoID}`);

    setToDo((currentState) => {
      const updatedToDo = currentState.filter((toDo) => toDo.id != toDoID);

      return [...updatedToDo];
    });

    setDeleteLoading(null)
  };

  // Function to edit a to-do
  const editToDo = async (toDoID, toDoName) => {
    setEditLoading(toDoID)

    const { data: updatedToDo } = await api.put(`tasks/${toDoID}`, {
      name: toDoName,
    });

    setToDo((currentState) => {
      const updatedToDos = currentState.map((toDo) => {
        return toDo.id == toDoID
          ? {
              ...toDo,
              name: updatedToDo.name,
            }
          : toDo;
      });

      return [...updatedToDos];
    });

    setEditLoading(null)
  };

  useEffect(() => {
    loadToDo();
  }, []);

  return (
    <AppContext.Provider
      value={{
        name,
        toDo,
        addToDo,
        removeToDo,
        editToDo,
        loading,
        addLoading,
        editLoading,
        deleteLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
