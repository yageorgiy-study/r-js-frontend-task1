import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
	<div className="App">
	  <header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h1>
		  Имя Фамилия Отчество
		</h1>

		<p>
		  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		  Egone quaeris, inquit, quid sentiam? In schola desinis. 
		</p>

		<h2>Проекты</h2>


		<h2>Ссылки</h2>

		<link title="hello" link="https://google.com/"></link>
	  </header>
	</div>
  );
}

export default App;
