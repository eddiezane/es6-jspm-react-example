import React from 'react';
import SearchBox from './searchBox.react';
import Image from './image.react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
    this.state = {images: []};
  }

  onSubmitCallback(searchTerm) {
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        this.setState({images: data.data});
      })
      .catch(err => console.error(err));
  }

  render() {
    let images = this.state.images.map((image, index) => {
      return <Image value={image.images.fixed_height.url} key={index} />
    });
    return (
      <div>
        <SearchBox onSubmitCallback={this.onSubmitCallback} />
        {images}
      </div>
    )
  }
}

React.render(<App />, document.body);
