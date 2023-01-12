import localforage from 'localforage';

function setTagStorage(tags) {
  return localforage.setItem('tags', tags);
}

export async function getTags() {
  const tags = await localforage.getItem('tags');
  if (!tags) return [];
  return tags;
}

export async function createTag(tag) {
  const tags = await getTags();
  const existedTag = tags.find((item) => item.id === tag.id);
  if (!existedTag) {
    tags.unshift(tag);
  }
  await setTagStorage(tags);
  return tag;
}

export async function deleteTag(id) {
  const tags = await localforage.getItem('tags');
  const index = tags.findIndex((tag) => tag.id === id);
  if (index > -1) {
    tags.splice(index, 1);
    await setTagStorage(tags);
    return true;
  }
  return false;
}
