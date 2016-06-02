import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyCTFTkIWWXVhZfMTxACBtsS8ZmZahgzZ3E';

class App extends Component {
  // Мы создаем состояние и назначаем ему начальное значение videos: []
  // для того чтобы иметь возможность изменять это состояние в дальнейшем когда
  // пользователь будет искать видео
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // Ответ на запрос, который мы получаем мы записываем в качестве параметра
    // videos, т.е. всю информацию, которую нам предоставляет API Youtube
    // мы называем videos
    // Когда мы получаем ответ на запрос мы переназначаем начальное состояние
    // Для того, чтобы при первом запуске приложения не отображались пустые списки
    // мы присваевыем начальному состоянию данные с Youtube , то-есть videos c дефолтным
    // значением term: 'cats'

    // YTSearch возвращает нам данные поиска и перезаписывет пустое значение состояния
    // videos на результаты поиска

    YTSearch({key: API_KEY, term: 'приколы с котами'}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      })
    })
  }
  // Для того, чтобы передать данные из родительского компонента в
  // дочерний, нам необходимо передать props - то-есть объект, который
  // берет данные из родительского компонента и переносит(ссылается на них)
  // в дочернем компоненте
  // В данном случае props = объекту с данными videos
  render(){
  return (<div>
            <SearchBar />
            <VideoDetail video = {this.state.selectedVideo}/>
            <VideoList
              onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
              videos = {this.state.videos} />
          </div>
        );
      }
}


ReactDOM.render(<App />, document.querySelector('.container'))
