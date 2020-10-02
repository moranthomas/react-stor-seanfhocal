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
    proverb: '"Múineann gá seift"',
    irish: '"Má tá riachtanas le rud smaoineoidh tú are chleas éigin chun é a dhéanamh"',
    english:  '"Necessity is the mother of invention"'
  };

  const proverb2 = {
    char_id: '1',
    proverb: '"Nuair is crua don chailleach caithfidh sí rith"',
    irish: '"Nuair a bhíonn an chailleach i gruachás bíonn uirthi rith"',
    english:  'When the hag gets into difficulties she must run'
  };

  const proverb3 = {
    char_id: '2',
    proverb: '"Bíonn dhá insint ar gach scéal"',
    irish: '"Bíonn dhá thaobh le gach scéal"',
    english:  'There are two sides to every story'
  };

  const proverb4 = {
    char_id: '3',
    proverb: '"Is éasca an t-amadán is a mhaoin a scaradh ona chéile"',
    irish: 'Caitheann fear na míchéille an iomarca airgid',
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
