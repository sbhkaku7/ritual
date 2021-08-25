import './App.css';
import Navbar from './Navbar';
import image from './images/Home-Hero-Desktop.jpg'
import Card from './Card';
import data from './data';

function App() {
  return (
    <div className="App">
      <div className="home-image" style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"4rem"}}>
        <div style={{width:"30rem"}}>
        <div className="main-heading" style={{}}>
          <div style={{alignSelf:"flex-end"}}>The future</div>
          <div style={{alignSelf:"flex-start"}}>of Health</div>
          <div style={{alignSelf:"flex-end",fontFamily:"Arial", fontWeight:"lighter"}}>--is clear.</div>
        </div>
        </div>
        <div className="main-button">
          <button>Shop All</button>
       
        </div>
      </div>
      <div  style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"4rem 4rem 0"}}>
      {data.map(res=><Card bg={res.backgroundImage} name={res.name} id={res.id} offer={res.offer}/>)}
      </div>
{/* 
      <Switch>
      <Route> <App/>
      </Route>

      </Switch> */}
    </div>
  );
}

export default App;
