import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''}
  }
  // Мы инициализируем начальное состояние и присваевыем ему пустое значение term: ''
  // Затем, при изменении в поле ввода мы назначаем введеное значение в значение
  // состояния term: event.target.value. То есть вся введеная информация записывается
  // в состоянии. Затем мы передаем это значение в value, чтобы контролировать значение
  // value при помощи state, а не наоборот
  render() {

    return (
      <div className="search-bar">
        <input  value = {this.state.term}
                onChange={event => this.setState({term: event.target.value})}/>
      </div>

    )
  };

};

export default SearchBar;
