import { Item } from "./Item/Item";
import { useAppContext } from "../../hooks/useAppContext";

import style from "./ToDoList.module.css";
import { Loading } from "../Loading/Loading";

const ToDoList = () => {
  const { toDo, loading } = useAppContext();

  return (
    <ul className={style.ToDoList}>
      {loading && (
        <p>Loading... <Loading /></p>
      )}

      {!loading && !toDo.length && <p>There are no tasks at the moment...</p>}

      {toDo.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} />
      ))}
    </ul>
  );
};

export { ToDoList };
