import localforage from 'localforage';

function setStorage(tasks) {
  return localforage.setItem('tasks', tasks);
}

export async function getTasks() {
  const tasks = await localforage.getItem('tasks');
  if (!tasks) return [];
  return tasks;
}

export async function createTask({ description, endDate, tags, status }) {
  const tasks = await getTasks();
  const id = Math.random().toString(36).substring(2, 9);
  const task = {
    id,
    description,
    endDate,
    tags,
    status,
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
