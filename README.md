<a name="top"></a>
# Youtube search app

*Приложения для поиска и просмотра видео с Youtube написанное на React*

## Оглавление

  1. [Пояснение](#explanation)
  1. [Инструкции для установки](#instuctions)
  1. [Что я узнал о React делая это приложение. Конспект](#conspect)
    1. [JSX]()
    1. [Функциональные компоненты](#functional_component)
    1. [Class based компоненты](#class_based_component)
    1. [Особенности ES6](#es6)
    1. [Обработка событий](#ev_handling)
    1. [state](#state)
    1. [Управляетые элементы формы](#controlled_field)
    1. [API]()
    1. [props]()
  1. [Блоки кода для запоминания]() 
 
<a name="explanation"></a>
###Пояснение:###


Это учебное приложение из курса [Modern React with Redux](https://www.udemy.com/react-redux) от [Udemy](https://www.udemy.com/courses "Сайт Udemy"). Преподаватель - Stephen Grider.

Приложение производит поиск видео на Youtube по введенным в форму поиска ключевым словам и позволяет просматривать это видео. Результат поиска выводится в виде списка с 5 элементами.
***

<a name="instuctions"></a>
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
[в начало](#top)
***

<a name="conspect"></a>
###Что я узнал о React делая это приложение. Конспект.###
####JSX####

* Необходимо всегда использовать синтаксис JSX ([ссылка](https://github.com/airbnb/javascript/tree/master/react#basic-rules))
* html атрибут class в JSX необходимо обозначать как className, т.к. слово class зарезервированно в JavaScript.

```
<div className="col-md-12"></div>
```
* Если имеется несколько тегов их необходимо обернуть в один div и весь код JSX обернуть в скобки:

```
return (
	<div>
		<input onChange={event => this.setState({term: event.target.value)}  />
		<p>this.state.term</p>
	</div>
	);
```

***

<a name="functional_component"></a>
####Функциональные компоненты####
Компоненты состоящие из функции называются - функциональные компоненты

```js
const ComponentName = () => {
	return <div></div>
}
```
***

<a name="class_based_component"></a>
####Class based компоненты####

- Class based компоненты создают, когда необходимо добавить расширенную функциональность в компоненты. Они получают всю функциональность, которую имеет React.Component. 
- Каждый Class based компонент обязан иметь метод render
- Когда мы объявляем метод render, он обязан возвращать JSX

```js
class SearchBar extends React.Component {
	render() {
		return <input />;
	}
}
```
Можно применить немного синтаксиса ES6

```js
import React, {Component} from 'react';

class SearchBar extends Component {
	render() {
		return <input />;
	}
}
```
***

####Рекомендация по выбору вида компонента:####

Необходимо всегда начинать с функционального компонента, а затем если в компоненте потребуется какая-то расширенная функциональность можно переделать его в Class based компонент.

[в начало](#top)
***

<a name="es6"></a>
####Особенности ES6####

#####const#####

Константа. Присвоенное ей значение не возможно в дальнейшем изменить, т.е. 

```js
  const a = 5;
  a = 6; // выдаст ошибку
```
***

#####import#####

Импортирует модули в другие модули

***
#####export#####

Экспортирует компоненты и делает их доступными для других модулей через import

[в начало](#top)
***
#####Функция-стрелка#####

([источник примеров](https://learn.javascript.ru/es-function "Современный учебник JavaScript"))

Эти две записи – примерно аналогичны:

```js
let inc = x => x+1;

let inc = function(x) { return x + 1; };
```
Как видно, "x => x+1" – это уже готовая функция. Слева от => находится аргумент, а справа – выражение, которое нужно вернуть.

Если аргументов несколько, то нужно обернуть их в скобки, вот так:

```js
'use strict';

let sum = (a,b) => a + b;

// аналог с function
// let inc = function(a, b) { return a + b; };

alert( sum(1, 2) ); // 3
```
Если нужно задать функцию без аргументов, то также используются скобки, в этом случае – пустые:

```js
'use strict';

// вызов getTime() будет возвращать текущее время
let getTime = () => new Date().getHours() + ':' + new Date().getMinutes();

alert( getTime() ); // текущее время
```

Когда тело функции достаточно большое, то можно его обернуть в фигурные скобки {…}:

```js
'use strict';

let getTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return hourse + ':' + minutes;
};

alert( getTime() ); // текущее время
```

Заметим, что как только тело функции оборачивается в {…}, то её результат уже не возвращается автоматически. Такая функция должна делать явный return, как в примере выше, если конечно хочет что-либо возвратить.

#####[Подробнее о функциях в ES6	](https://learn.javascript.ru/es-function "Современный учебник JavaScript")#####

#####[Style Guide по функциям-стрелкам](https://github.com/airbnb/javascript#arrow-functions)#####

[в начало](#top)
***

<a name="ev_handling"></a>
####Обработка событий####
Обработчик событий - это функция, которая должна запустится когда происходит какое либо событие

Обработка событий в React реализуется в 2 этапа: 

1.   Мы объявляем обработчик событий.

```js
class SearchBar extends Component {
	render() {
		return <input />;
	}
	
	onInputChange() {
	
	}
}
```
2.  Мы передаем обработчик событий в элемент, в котором мы хотим отслеживать это событие

```js
class SearchBar extends Component {
	render() {
		return <input  onChange={this.onInputChange} />;
	}
	
	onInputChange() {
		console.log(event.target.value);
	}
}
```

- При именовании обработчика событий лучше пользоваться следующей схемой: onInputChange - on + элемент в котором происходит событие + событие

- Каждый раз когда мы добавляем обработчик событий он всегда вызывается вместе с объектом **event**. Объект event описывает информацию о событии которое произошло. Детали произошедшего события браузер записывает в «объект события» (event). Для того, чтобы иметь доступ к информации, которую содержит объект event, а также воздействовать на него необходимо передать event первым аргументом в обработчик.

Если количество кода в обработчике невелико, то можно сократить код используя синтаксис ES6

```js
class SearchBar extends Component {
	render() {
		return <input onChange={event => console.log(event.target.value)}  />
	}
```
[в начало](#top)
***

<a name="state"></a>
####state####
- State (Состояние) - это объект js, который используется для записи пользовательских событий.
- Каждый **class based компонент** имеет свой собственный объект state.
- Каждый раз, когда состояние компонента изменяется, компонент немедленно ререндерится, а также вынуждает дочерние компоненты ререндерится.
- Перед тем, как использовать State внутри компонента мы должны инициализировать объект State. Для инициализации State мы указываем свойство state в js объекте внутри  метода constructor :

```js
class SearchBar extends Component {
	constructor(props){
	super(props);
	
	this.state = {term: ''};
	}
	
	render() {
		return <input onChange={event => console.log(event.target.value)}  />
	}
```
- Функция constructor зарезервирована для настроек. Например инициализации переменных или объекта state
- Каждый раз, как мы используем State мы инициализируем его объявляя новый объект и присваиваем его this.state 

```js
this.state = {term: ''};
```
- Объект, который мы инициализируем содержит свойство, которое мы хотим записать в нашем объекте state. Например, когда пользователь вводит текст в поле поиска, т.е. изменяет значение поля, мы хотим записать эти изменения в свойство term объекта state: term: 'введеные данные'.

```
render() {
		return <input onChange={event => this.setState({term: event.target.value)}  />
	}
// теперь свойство term содержит данные введенные в поле ввода, т.е. все что мы вводм в input записывается в term. И далее в коде мы можем использовать эти данные таким образом: 

this.state.term

// т.е. this.state.term эквивалентен тексту введенному пользователем и если мы хотим напишим 

return <p> this.state.term </p>;

// у нас в реальном времени появится абзац с текстом, который ввел пользователь
```

- Для изменения начального состояния мы используем метод this.setState и вставляем в него объект содержащий новое состояние, которое мы хотим дать нашему компоненту

- Только внутри метода 'constructor' мы можем менять 'состояние' таким образом: this.state={ term: '' }; . В любом другом месте мы можем менять 'состояние' только так: this.setState({term: "новое состояние"})

[в начало](#top)
***

<a name="controlled_field"></a>
####Управляетые элементы формы###

Управляетые элементы формы - это элемент формы, как например input, значение( value ), которого устанавливается 'состоянием' (state) а не наоборот.

В коде ниже изменение в поле ввода(когда пользователь вводит данные) приводит к изменению состояния(state). Input контролирует состояние.

```
class SearchBar extends Component {
	constructor(props){
	super(props);
	
	this.state = {term: ''};
	}
	
	render() {
		return <input onChange={event => this.setState({term: event.target.value)}  />
	}
}
```
Но чаще должно быть наоборот: состояние должно диктовать inputу, каким должно быть значение (value)

```
class SearchBar extends Component {
	constructor(props){
	super(props);
	
	this.state = {term: ''};
	}
	
	render() {
		return (
			<div>
				<input 
					value = {this.state.term}
					onChange={event => this.setState({term: event.target.value)}  />
			</div>
		);
	}
}
```
Теперь значение(value) меняется, только когда изменится состояние(state). 
Пользователь вводит данные, они записываются в состояние, value получает это значение.


