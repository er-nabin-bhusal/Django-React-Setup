import React from 'react';
import axios from 'axios';

export default class Home extends React.Component {
    state = { rooms: [] };

    async componentDidMount() {
      const res = await axios.get('http://127.0.0.1:8000/list/room/');
      this.setState({ rooms: res.data });
    }

    render() {
      const { rooms } = this.state;
      return (
        <>
          <h1>Rooms</h1>
          <ul>
            {
              rooms.map(obj => {
                return (
                  <li>{obj.code}, {obj.host}</li>
                )
              })
            }
          </ul>
        </>
      )
    }
}
