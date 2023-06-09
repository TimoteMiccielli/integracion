import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App' style={{padding: "25px", display: 'flex'}}>
        {/*<div> <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
   </div>*/}
     <div>
      <Cards 
         characters = {characters}
         />
     </div>
     <br />
     <div >
         <SearchBar 
            onSearch={(characterID) => window.alert(characterID)} />
      </div>
     </div>
   );
}

export default App;
