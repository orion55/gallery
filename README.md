# Тестовое задание Firecode 

## Описание:

Компания KeyFrame занимающаяся фотосъемкой поняла, что Инстаграм - не самая эффективная и удобная платформа для ведения своего бизнеса и привлечения людей на фотосессии.

Они обратились к нам с просьбой реализовать MVP версию сайта, чтобы узнать будет ли их сайт интересен пользователям.

## Техническое задание:

Приложение должно состоять из:

1. **Двух полей для загрузки изображений и кнопки для отправления запроса**
    - Первое (текстовое) поле принимает ссылку на изображение.
    - Второе поле принимает JSON-файл с ссылками на изображения и их описанием (для загрузки JSON-файлов используется диалоговое окно).
2. **Галереи изображений**

    Представляет собой упорядоченный набор изображений.

    При наведении на изображение должно:

    - Выводиться её описание (если оно есть).
    - Появляться кнопка для удаления изображения.
    
Нажмите, чтобы посмотреть видео-пример галереи

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/DqqQVeLtQjU/0.jpg)](https://www.youtube.com/watch?v=DqqQVeLtQjU)

**Требования к галерее:**

- Галерея должна быть реализована без использования сторонних библиотек.
- Начальный список изображений с их описанием берётся из [статического JSON файла](https://drive.google.com/file/d/1AZg21vdC2ACKGgE22jZth_luYfQEn-60/view?usp=sharing), отправленные с помощью поля для загрузки изображения должны сохраняться в localStorage и быть доступными после перезагрузки страницы, реализовывать сервер не нужно.
- Нажмите на стрелку слева, чтобы отобразить JSON с изображениями
- Галерея должна быть адаптивной. Минимальная поддерживая ширина - 320px.
- После нажатия на кнопку загрузки оба поля должны очищаться.
- Количество изображений в каждом ряду должно варьироваться от 1 до 5 (в зависимости от ширины экрана).
- Изображения должны сохранять свои пропорции.

**Требования к верстке:**

- Вся верстка должна быть реализована без использования библиотек компонентов (Material UI, Bootstrap, Chakra UI, Ant Design и так далее).
- Если для написания стилей не используются CSS-модули, то названия классов должны быть написаны используя соглашение по наименованию BEM.
- Внешний вид приложения - на твоё усмотрение.

**Ограничения:**

- В качестве стека технологий используй React, Vue или Angular (в зависимости от того, по какому фреймворку проходило собеседование) и желательно TypeScript. **Другие технологии на твой вкус.**
- Если тебе не привычно работать с localStorage, можешь реализовать простенький сервер.

**Дополнительные задания:**

1. Добавь функционал открытия лайтбокса изображения по нажатию на превью изображения в галерее.

    Лайтбокс должен содержать:

    - Описание изображения.
    - Кнопку закрытия лайтбокса.
2. Добавь возможность загружать изображения не из ссылок, а из файлов (.jpeg/.jpg, .png).

По итогу выполнения задания мы ждем ссылку на репозиторий в системе контроля версий (например, GitHub), всю дополнительную информацию, которую ты хочешь нам сообщить напиши в README файле репозитория.

Мы рассчитываем, что на выполнение этого задания у тебя уйдет не более 20 часов.

Удачи! 🙂

## Комментарии исполнителя
В ТЗ много неявных вариантов реализации, которые я решил на своё усмотрение

## Развёртывание проекта

Вот краткое введение о том, что должен сделать разработчик, чтобы начать дальнейшую разработку проекта:
```
git clone https://github.com/orion55/gallery.git
cd gallery/
npm install
npm start
```

### Компиляция и горячая перезагрузка для разработки
```
npm start
```

### Компиляция и минификация для продакшена
```
npm run make-build
```
## Ссылки

- Домашняя страница: https://orion55.github.io/gallery/
- Repository: https://github.com/orion55/gallery.git



## Licensing

Код в этом проекте распространяется по лицензии MIT.
