const todokey = "reactTodo";
export const getLocalStorageTodoData = () => {
  const rowTodos = LocalStorage.getItem(todokey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};


export const setLocalStorageTodoData = (task) => {
  return  LocalStorage.setItem("todokey", JSON.stringify(task));
  };