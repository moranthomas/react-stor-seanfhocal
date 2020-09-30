/*jshint esversion: 6 */

import React  from 'react';
//import React, { useState, useEffect, useRef } from 'react';
import Header from './components/ui/Header';
import ProverbGrid from './components/proverbs/ProverbGrid';
//import Search from './components/ui/Search';
import './App.css';


const App = () => {


  /*const isLoading = useRef(true);

  useEffect(() => {
      console.log('isLoading == ' + isLoading.current);

      setTimeout(function() { //Start the timer
        isLoading.current = false;
        console.log('isLoading == ' + isLoading.current);
      }.bind(this), 1000);

  });*/

  const isLoading = false;  //hardcode for now as async timer method not working


  const proverb1 = {
    char_id: '0',
    proverb: '"Muineann ga seift"',
    irish: '"Ma ta riachtanas le rud smaoineoidh tu are chleas eigin chun e a dheanamh"',
    english:  '"Necessity is the mother of invention"'
  };

  const proverb2 = {
    char_id: '1',
    proverb: '"Nuair is crua don chailleach caithfidh si rith"',
    irish: '"Nuair a bhionn an chailleach i gruachas bionn uirthi rith"',
    english:  'When the hag gets into difficulties she must run'
  };

  const proverb3 = {
    char_id: '2',
    proverb: '"Bionn dha insint ar gach sceal"',
    irish: '"Bionn dha thaobh le gach sceal"',
    english:  'There are two sides to every story'
  };

  const proverb4 = {
    char_id: '3',
    proverb: '"Is easca an t-amadan is a mhaoin a scaradh ona cheile"',
    irish: 'Caitheann fear na micheille an iomarca airgid',
    english:  'A fool and his money are soon parted'
  };

  const proverbArray = [
    proverb1, proverb2, proverb3, proverb4
  ];

  return (
    <div className='container'>
      <Header />
      {/**<Search getQuery={(q) => setQuery(q)} />**/}
      <ProverbGrid isLoading={isLoading.current} items={proverbArray} />

    </div>
  )
}

export default App
