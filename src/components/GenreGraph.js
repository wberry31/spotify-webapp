import React from 'react';
import {Polar} from 'react-chartjs-2';

const data = {
    datasets: [{
      data: [
        11,
        16,
        7,
        3,
        14,
        6
      ],
      backgroundColor: [
        '#14741B',
        '#12B61D',
        '#72DF79',
        '#262726',
        '#797A79',
        '#C5C6C5'
      ],
      label: 'My dataset' // for legend
    }],
    labels: [
      'Genre 1',
      'Genre 2',
      'Genre 3',
      'Genre 4',
      'Genre 5'
    ]
  };
  
  export default React.createClass({
    displayName: 'GenreGraph',
  
    render() {
      return (
        <div>
          <h2>Top Genres</h2>
          <p> Your most listened to genres of all time according to Spotify. </p>
          <Polar data={data} />
        </div>
      );
    }
  });