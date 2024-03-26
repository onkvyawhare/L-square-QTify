import { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import styles from './App.module.css'
import { fetchTopAlbums, fetchNewAlbums } from './api/api';
import Section from './components/Section/Section';



function App() {

  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);


  const generateTopAlbumSongs = async () => {
    try {
      const topAlbumSongs = await fetchTopAlbums()
      setTopAlbumSongs(topAlbumSongs)
    }
    catch (error) {
      console.log(error)
      return null
    }

  }
  const generateNewAlbumSongs = async () => {
    try {
      const newAlbumSongs = await fetchNewAlbums()
      setNewAlbumSongs(newAlbumSongs);
      // setFilteredDataValues(newAlbumSongs);
    }
    catch (error) {
      console.log(error)
      return null
    }
  }


  useEffect(() => {
    
    generateTopAlbumSongs();
    generateNewAlbumSongs();
    // generateFilterSongs();
    // setFilteredDataValues(newAlbumSongs);

  }, [])



  
  
  return (
      <div>
       <Navbar />
       <Hero/>
        <div className={styles.sectionWrapper}>
          <Section type='album' title='Top Albums' data={topAlbumSongs} />
          <Section type='album' title='New Albums' data={newAlbumSongs} />
       
        </div>
       
       
      
      </div>
  );
}

export default App;
