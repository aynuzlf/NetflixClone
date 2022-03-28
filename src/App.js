import React from 'react';
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import Requests from './Requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Nav/>
<Banner/>
     <Row title="NETFLIX ORGINALS" fetchURL={Requests.fetchNetflixOriginals} isLargeRow={true} />
     <Row title="Trending Now" fetchURL={Requests.fetchTrending}/>
     <Row title="Top Rated" fetchURL={Requests.fetchTopRatedMovies}/>
     <Row title="Action Movies" fetchURL={Requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchURL={Requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchURL={Requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchURL={Requests.fetchRomanMovies}/>
     <Row title="Documantaries" fetchURL={Requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
