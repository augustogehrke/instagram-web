import React, { Component } from 'react';
import './New.css';
import api from '../service/api';
class New extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: ''
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleImageChange = e => {
    this.setState({image: e.target.files[0]});
  }

  handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();

    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    await api.post('posts', data);
    this.props.history.push('/');
    
  }

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
      <input type="file" onChange={this.handleImageChange}/>
        <input type="text" onChange={this.handleChange} value={this.state.author} name="author" placeholder="Autor"/>
        <input type="text" onChange={this.handleChange} value={this.state.place} name="place" placeholder="Local"/>
        <input type="text" onChange={this.handleChange} value={this.state.description} name="description" placeholder="Descrição"/>
        <input type="text" onChange={this.handleChange} value={this.state.hashtags} name="hashtags" placeholder="Hashtags"/>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default New;