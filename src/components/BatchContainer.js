import React, { Component } from 'react';
import Batch from './Batch.js';

class BatchContainer extends Component {
  state = {
    batches: [],
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then(dog => this.setState({ dog: dog.message }))
    .then(() => console.log("Dog in state:", this.state.dog))
  }

  renderBatches = (arr) => {
    return arr.map(batch => {
      return <Batch batchName={ batch } dogImg={ this.state.dog }/>
    })
  }

  render() {
    const batches = ["nyc-mhtn-web-career-012819", "nyc-mhtn-web-career-012820", "nyc-mhtn-web-career-012821", "nyc-mhtn-web-career-012822", "nyc-mhtn-web-career-012823", "nyc-mhtn-web-career-012824"]

    return (
      <div>
        {this.renderBatches(batches)}
      </div>
    );
  }
}

export default BatchContainer;
