import logo from './logo.svg';
import "./App.scss";
import React, { useRef, useEffect, useState, Suspense } from "react";
import Header from './components/Header';
import ButtonText from './components/ButtonText';
import MainButtons from './components/MainButtons';
function App() {
  return (
    <>
    <Header/>
    <ButtonText/>
    <div className='home'>
      <div className="showcase">
      <h1><span className='orange'><b>K</b></span>indle <span className='orange'><b>G</b></span>reatness with <span className='orange'><b>K</b></span>erner and <span className='orange'><b>G</b></span>riffiths!</h1>
      </div>
      <div className='other-text'>
        <div className='container'>
        <p>Have you ever wondered who amends student fees, represents student voices to the OSU administration, and ultimately makes valuable changes on campus for the student body? To answer your question, it is the student government of Oregon State University, also known as the Associated Students of Oregon State University (ASOSU). Many may be unaware of the positive changes that ASOSU can make, so it is a goal of Alexander Kerner and Isabella Griffiths to involve the student body in the amazing opportunities that ASOSU can provide. The Kerner and Griffiths administration has the intent for ASOSU to partner and collaborate directly with the student body so that we are able to thoroughly represent each individual on campus. We want to hear your concerns and ideas to ultimately work together to make OSU 4 YOU!</p>
        
        <br />
        <p>OSU 4 YOU is a campaign that was created to improve YOUR student services and experiences. We plan on:</p>
        <div className='butts'> <MainButtons/> </div>
        <br />
        <p><><br /></>Make OSU 4 you! For Students and their experiences.</p>
        </div>
      </div>

  </div>
  </>
  );
}

export default App;
