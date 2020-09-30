/*jshint esversion: 6 */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import ProverbGrid from './components/proverbs/ProverbGrid';
//import Search from './components/ui/Search';
import './App.css';
import ProverbItem from './components/proverbs/ProverbItem';
import logo from './img/logo.png';

import hammer from './img/hammer.png';



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
    name: 'Saying1',
    portrayed: 'mickey',
    nickname:  'monkey',
    birthday:  '12/08/75',
    status:  'married'
  };

  const proverb2 = {
    char_id: '1',
    name: 'Saying2',
    portrayed: 'In Irish',
    nickname:  'monkey',
    birthday:  '12/08/75',
    status:  'married'
  };

  const proverb3 = {
    char_id: '2',
     name: 'Saying2',
    portrayed: 'In Irish',
    nickname:  'monkey',
    birthday:  '12/08/75',
    status:  'married'
  };

  const proverb4 = {
    char_id: '3',
     name: 'Saying2',
    portrayed: 'In Irish',
    nickname:  'monkey',
    birthday:  '12/08/75',
    status:  'married'
  };

  const proverbArray = [
    proverb1, proverb2, proverb3, proverb4
  ];

  //const [items, setItems] = useState([])
  //const [isLoading, setIsLoading] = useState(true)
  //const [query, setQuery] = useState('')



  /*useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])*/

  return (
    <div className='container'>
      <Header />
      {/**<Search getQuery={(q) => setQuery(q)} />**/}
      <ProverbGrid isLoading={isLoading.current} items={proverbArray} />

    </div>
  )
}

export default App
