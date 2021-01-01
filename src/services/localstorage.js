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
      url,
      description: '',
    });
    this.save(key, arr);
  }

  getImages() {
    return this.get('images');
  }

  saveImages(value) {
    return this.save('images', value);
  }

  deleteImages() {
    return this.delete('images');
  }
}

export default new LocalStorageDB();
