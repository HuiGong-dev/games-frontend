import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Home from './components/Home';
import Detail from './components/detail/Detail';
import { Routes, Route } from 'react-router-dom';
import api from './api/axiosConfig';

function App() {
  const [games, setGames] = useState();
  const [game, setGame] = useState();
  const [reviews, setReviews] = useState([]);

  const getGames = async () => {
    try {
      const response = await api.get('/api/v1/games');
      setGames(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getSingleGame = useCallback(async (steamId) => {
    try {
      const response = await api.get(`/api/v1/games/${steamId}`);
      setGame(response.data);
      setReviews(response.data.reviewIds);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getGames();
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-black text-white ">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home games={games} />}></Route>
          <Route
            path="/detail/:steamId"
            element={
              <Detail
                getSingleGame={getSingleGame}
                game={game}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
