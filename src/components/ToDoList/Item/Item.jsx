import { useState } from "react";
import { useAppContext } from "../../../hooks/useAppContext";
import { Button } from "../../Button/Button";
import { TIPO_BOTAO } from "../../Button/const";
import { TextField } from "../../TextField";
import style from "./Item.module.css";
import { Loading } from "../../Loading/Loading";

const Item = (props) => {
  const { id, name } = props;

  const [editing, setEditing] = useState(false);

  const { editLoading, deleteLoading, editToDo, removeToDo } = useAppContext();

  const onBlurToDo = (event) => {
    const toDoName = event.currentTarget.value;

    editToDo(id, toDoName);

    setEditing(false);
  };

  const loadingIsEditing = editLoading == id;
  const loadingIsDeleting = deleteLoading == id;

  return (
    <li className={style.Item}>
      {(loadingIsEditing || editing) && (
        <TextField defaultValue={name} onBlur={onBlurToDo} autoFocus />
      )}

      {!loadingIsEditing && !editing && <span onDoubleClick={() => setEditing(true)}>{name}</span>}

      {loadingIsEditing && (
        <Loading />
      )}

      <Button
        text={loadingIsDeleting ? <Loading /> : "-"}
        type={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removeToDo(id)}
      />
    </li>
  );
};

export { Item };
