import { useState } from 'react';
import TaskInput from '../../components/Input';
import Lists from '../../components/Lists';

function TodoList() {
  const [editedId, setEditedId] = useState('');
  const [deletedId, setDeletedId] = useState();
  const [lists, setLists] = useState([
    { id: 1, name: 'List 1' },
    { id: 2, name: 'List 2' },
    { id: 3, name: 'List 3' },
  ]);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div style={{ maxWidth: '640px', width: '100%' }}>
        <h1>Todo List</h1>
        <TaskInput
          onEditTask={(input) => {
            const newLists = [...lists];
            newLists.forEach((list) => {
              if (list.id === editedId) {
                list.name = input;
              }
            });
            setLists(newLists);
            setEditedId('');
          }}

          onDeleteTask={(deletedId) => {
            const onDeleteTask = [...setDeletedId]
            newLists.forEach((list) => {
              if (list.id !== deletedId) {
                list.name = remove;
              }
            });
            setLists(newLists);
            setDeletedId();
          }}

          editedList={lists.find((list) => list.id === editedId)}
          onAddTask={(input) => {
            setLists((lists) => [
              ...lists,
              {
                id: new Date().toISOString(),
                name: input,
              },
            ]);
          }}
        />
        <Lists
          onEdit={(id) => {
            setEditedId(id);
          }}
          onDelete={(id) => {
            setDeletedId(id);
          }}
          lists={lists}
        />
      </div>
    </div>
  );
}

export default TodoList;