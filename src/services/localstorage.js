const uniqid = require('uniqid');

class LocalStorageDB {
  /**
     * Добавляем данные в localStorage
     *
     *
     * @param {string} key - ключ
     * @param {any} value  - значение
     */
  save(key, value) {
    const valueNew = JSON.stringify(value);
    localStorage.setItem(key, valueNew);
    return true;
  }

  /**
     * Извлекаем данные из localStorage
     *
     *
     * @param {string} key object key id
     *
     * @returns {object|null}
     */
  get(key) {
    const data = localStorage.getItem(key);
    if (data === null) return false;
    let dataNew = false;
    try {
      dataNew = JSON.parse(data);
    } catch (e) {
      console.error(e);
    }
    return dataNew;
  }

  // удаляем значение по ключу
  delete(key) {
    localStorage.removeItem(key);
  }

  addImage(url) {
    const key = 'images';
    const data = this.get(key);
    const arr = (data) || [];
    arr.push({
      id: uniqid(),
      url,
      description: '',
    });
    this.save(key, arr);
  }

  getImages() {
    return this.get('images');
  }

  saveImages(values) {
    if (!values) return null;

    let newValues = values;
    if (!('id' in values[0])) {
      newValues = values.map((item) => ({ id: uniqid(), ...item }));
    }
    return this.save('images', newValues);
  }

  deleteImages() {
    return this.delete('images');
  }

  removeImage(num) {
    const key = 'images';
    const data = this.get(key);
    if (data) {
      const newData = data.filter(({ id }) => id !== num);
      if (newData.length !== 0) {
        this.save(key, newData);
      } else {
        this.deleteImages();
      }
    }
  }
}

export default new LocalStorageDB();
