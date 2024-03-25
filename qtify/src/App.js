import { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import CardSection from './components/Cardsection/Cardsection';
import { getTopSongsData, getNewSongsData,getSongsData } from './api/api';



function App() {


  const [topSongsData, setTopSongsData] = useState([]);
  const [newSongsData, setNewSongsData] = useState([]);
   const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    (async () => {
      const topSongsData = await getTopSongsData();
      setTopSongsData(topSongsData);

      const newSongsData = await getNewSongsData();
      setNewSongsData(newSongsData);

       const songsData = await getSongsData();
       setSongsData(songsData);
    })();
  }, []);
  return (
    <div>
       <Navbar />
       <Hero/>
       
       <CardSection name="Top Albums" songsData={topSongsData} />
        <CardSection name="New Albums" songsData={newSongsData} />
        <CardSection name="Songs" songsData={songsData} showFilters />
      
    </div>
  );
}

export default App;
