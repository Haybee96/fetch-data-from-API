import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';
import ProfileRecords from './components/profiles/profileRecords';
import Search from './components/UI/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.enye.tech/v1/challenge/records?name=${query}`);
      // console.log(result.data.records.profiles);

      setItems(result.data.records.profiles);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <header className='center'>
        <h1 className='logo'>Ecommerce Records</h1>
      </header>

      <Search getQuery={(q) => setQuery(q)} />

      <ProfileRecords isLoading={isLoading} items={items} />
      
    </div>
  );
}

export default App;
