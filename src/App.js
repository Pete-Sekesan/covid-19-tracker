import React, { Component } from 'react';
import { fetchApi } from './api/script';
import CountrySelector from './components/CountrySelector/CountrySelector';
import Graph from './components/Graph/Graph';
import Cards from './components/Cards/Cards';
import './App.css';

export class App extends Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchApi();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchApi(country);

    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;

    return (
      <div className='div'>
        <h1> COVID-19 By The Numbers</h1>
        <Cards data={data} />
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Graph data={data} country={country} />
        <a href='https://peter-sekesan.dev'>Developed by Peter Sekesan</a>
      </div>
    );
  }
}

export default App;
