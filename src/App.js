import React, { Component } from 'react';
import { fetchApi } from './api/script';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Graph from './components/Graph/Graph';
import Cards from './components/Cards/Cards';

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
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Graph data={data} country={country} />
      </div>
    );
  }
}

export default App;
