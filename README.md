# Youtube search app

*Приложения для поиска и просмотра видео с Youtube написанное на React*

## Оглавление

  1. [Пояснение](#types)
  2. [Инструкции для установки](#references)
    3. [Если вы знакомы с Git.]()
    4. [Eсли не знакомы с Git.]()
  3. [Что я узнал о React делая это приложение]()
    4. [JSX]()
    5. [Функциональные компоненты]()
    6. [Class based компоненты]()
    7. [Особенности ES6]()
    5. [export и import]()
    6. [API]()
    6. [state]()
    7. [props]()

###Пояснение:###

Это учебное приложение из курса [Modern React with Redux](https://www.udemy.com/react-redux) от [Udemy](https://www.udemy.com/courses "Сайт Udemy"). Преподаватель - Stephen Grider.

Приложение производит поиск видео на Youtube по введенным в форму поиска ключевым словам и позволяет просматривать это видео. Результат поиска выводится в виде списка с 5 элементами.

###Инструкции для установки:###

####Если вы знакомы с Git.####

Склонируйте репозиторий, установите зависимости и запустите процессы gulp:

```
	> git clone https://github.com/radislaw/Youtube_search_app.git
	> cd Youtube_search_app
	> npm install
	> npm start
```

####Eсли не знакомы с Git.#####
Нажмите [здесь](https://github.com/radislaw/Youtube_search_app/archive/master.zip) - загрузится .zip файл.  Разархивируйте его, затем откройте консоль, перейдите в директорию проекта и выполните следующие команды:

```
  > npm install
  > npm start
```

####В адресной строке браузера наберите http://localhost:8080/#####

###Что я узнал о React делая это приложение:###
1. JSX

* Необходимо всегда использовать синтаксис JSX ([ссылка](https://github.com/airbnb/javascript/tree/master/react#basic-rules))
* Атрибут class в JSX необходимо обозначать как className, т.к. слово class зарезервированно в JavaScript.

