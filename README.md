<h1>Создание и настройка React-App </h1>

1. Создать репозиторий и склонировать на ПК
2. Установить React application Открыть терминал в папке проекта и установить react-app

npx create-react-app . 3. Удалить ненужные файлы 3.1 public/index.html В папке public оставить
только index.html. Удалить код из index.html, создать базовую разметку с помощью Emmet.

Разметка может выглядеть так:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

3.2 /src

В папке /src достаточно оставить index.js, App.js, index.css, App.css В папке /src создать папку
components для размещения будущих компонентов.

3.3 index.js В index.js достаточно оставить следующий код:

// index.js import React from 'react'; import ReactDOM from 'react-dom'; import App from './App';

ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root'), );

3.4 App.js В App.js достаточно оставить следующий код:

// App.js import './App.css';

function App() { return <div className="App">TEST</div>; }

export default App;

3.4 App.css

В App.css удалить ненужные стили.

4. Запустить сервер проверить, нет ли ошибок.

npm start

5. Настройка pre-commit хуков

5.1 Установка зависимостей Установить в проект следующие пакеты. Примечание: react-app корректно
работает с более старой версией eslint 7.11.0

npm install --save-dev prettier eslint@7.11.0 5.2

Инициализация lint-staged и husky Пользователям MacOS и Linux систем необходимо выполнить в
терминале следующую команду. Она установит и настроит husky и lint-staged в зависимости от
инструментов качества кода из зависимостей проекта в package.json.

npx mrm lint-staged

Пользователям Windows необходимо выполнить следующую команду. Она делает тоже самое.

npx mrm@2 lint-staged

5.3 Настройка в VSCode Проверить наличие следующих раширений:

Prettier - Code formatter

Formatting Toggle

ESLint

Можно добавить настройки Prettier, создав файл .prettierrc.yaml в корневой папке проекта. Можно
добавить следующие настройки.

printWidth: 100 useTabs: false semi: true singleQuote: true trailingComma: 'all' bracketSpacing:true
arrowParens: 'avoid' proseWrap: 'always'

Добавить код в файл settings.json

Ctrl + Shift + P => settings.json => Open Settings (JSON)

{ "files.autoSave": "onFocusChange", "editor.formatOnSave": true, "editor.codeActionsOnSave": {
"source.fixAll.eslint": true } }

6. Настройка Деплоя Ссылка на create-react-app

В package.json добавить следующию строку:

"homepage": "https://https://имя*пользователя.github.io/имя*репозитория" Сделать билд через
терминал:

npm run build Установить пакет gh-pages

npm install --save gh-pages В package.json в scripts добавить 2 скрипта:

"scripts": { // добавить к остальным скриптам "predeploy": "npm run build", "deploy": "gh-pages -d
build", }

Запустить деплой

npm run deploy

Скрипт predeploy запускать не нужно, он выполнится автоматически. Будет создана ветка gh-pages,
выполнен коммит и пуш в ваш репозиторий на GitHub.сom, в настройках GitHub Pages автоматически будет
подставлена ветка gh-pages, достаточно взять ссылку.

7. Дальнейшая работа с проектом Работаем, делаем коммиты и пушим на GitHub как обычно. Страница
   автоматически не обновится. Если нужно залить на GitHub Pages, делаете повторно npm run deploy.
