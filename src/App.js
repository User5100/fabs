import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child'
import Modal from './Modal';

function App() {
  const [showFAB, setShowFAB] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleEnter() {
    if(!showFAB) {
      setShowFAB(true)
    }
  }

  function handleLeave() {
    if(!showModal) {
      setShowFAB(false)
    } 
  }

  function hideFAB() {
    setShowFAB(false)
  }

  function handleClick(event) {
    event.stopPropagation()
    setShowModal(!showModal)
  }

  function handlePlusClick(event) {
    event.stopPropagation()
    if(showFAB && !showModal) {
      setShowFAB(false)
    } else {
      setShowFAB(true)
    }
  }

  return (
    <div>
      <section
        onMouseLeave={handleLeave}
        className="container">
        <button
          onClick={handlePlusClick}
          onMouseEnter={handleEnter}
          className='btn'>
          <i className="fa fa-close"></i>
        </button>
        <ul className={ showFAB ? 'show-fab' : '' }>
          <li onClick={handleClick}>
            <button>
              <i className="fa fa-home"></i>
            </button>
          </li>
          <li onClick={handleClick}>
            <button>
              <i className="fa fa-bars"></i>
            </button>
          </li>
          <li onClick={handleClick}>
            <button>
              <i className="fa fa-folder"></i>
            </button>
          </li>
        </ul>
        { showModal && <Modal><Child handleClick={handleClick} hideFAB={hideFAB}/></Modal> }
      </section>
    </div>
  )
}

export default App;
