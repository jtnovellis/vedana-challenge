import localforage from 'localforage';

function setStorage(tasks) {
  return localforage.setItem('tasks', tasks);
}

export async function getTasks() {
  const tasks = await localforage.getItem('tasks');
  if (!tasks) return [];
  return tasks;
}

export async function updateTask(id, newData) {
  const tasks = await localforage.getItem('tasks');
  const task = tasks.find((task) => task.id === id);
  const index = tasks.findIndex((task) => task.id === id);
  const newTask = {
    ...task,
    ...newData,
  };
  tasks.splice(index, 1, newTask);
  await setStorage(tasks);
  return newTask;
}

export async function createTask({ description, endDate, tags }) {
  const tasks = await getTasks();
  let id = Math.random().toString(36).substring(2, 9);
  const task = {
    id,
    description,
    endDate,
    tags,
    status: 'pending',
  };
  tasks.unshift(task);
  await setStorage(tasks);
  return task;
}

export async function deleteTask(id) {
  const tasks = await localforage.getItem('tasks');
  const index = tasks.findIndex((task) => task.id === id);
  if (index > -1) {
    tasks.splice(index, 1);
    await setStorage(tasks);
    return true;
  }
  return false;
}
