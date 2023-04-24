import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Home from './components/Home';
import Trailer from './components/trailer/Trailer';
import { Routes, Route } from 'react-router-dom';
import api from './api/axiosConfig';

function App() {
  const [games, setGames] = useState();

  const getGames = async () => {
    try {
      const response = await api.get('/api/v1/games');
      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGames();
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-black text-white ">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home games={games} />}></Route>
          <Route path="/detail/:trailerId" element={<Trailer />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
