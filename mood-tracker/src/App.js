import React from 'react';
import './styles/style.css';

import Header from './components/Header';
import Login from './components/Login';

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://jtzimmerm:' +
    process.env.MONGO_ATLAS_PW +
    '@mongotestdb-rfuia.mongodb.net/test?retryW rites=true&w=majority',
  {
    useMongoClient: true
  }
)

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
