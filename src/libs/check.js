import axios from 'axios';

const MAX_SIZE = 1;

export const checkUrl = (url) => new Promise((resolve, reject) => {
  const myRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
  if (!myRegex.test(url)) {
    reject(new Error('Ссылка не является картинкой!'));
    return;
  }
  resolve(true);
});

export const checkSize = (file) => new Promise((resolve, reject) => {
  const size = (file.size / 1024 / 1024).toFixed(2);
  if (size > MAX_SIZE) {
    reject(new Error(`Размер файла не должен превышать ${MAX_SIZE}Mb`));
    return;
  }
  resolve(true);
});

export const checkJson = (file) => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.readAsText(file, 'UTF-8');

  fileReader.onload = (e) => {
    try {
      resolve(JSON.parse(e.target.result));
    } catch (err) {
      reject(new Error(err.toString()));
    }
  };

  fileReader.onerror = () => {
    reject(new Error(fileReader.error));
  };
});

export const checkLinks = async (links) => {
  const urls = [];
  const errors = [];

  const request = (link) => axios.head(link)
    .then(() => urls.push(link))
    .catch(() => errors.push(link));

  const promises = links.map(request);
  await Promise.all(promises);
  return ({ urls, errors });
};
