
import './App.css';

import Records from'./records.json'
function App() {
  return (
    <div className="App">
      {/* DISPLAYING JSON DATA IN JAVASCRIPT */}
     ...webStylePress...
     <br/><br/>
     {
      Records && Records.map(record =>{
        return(
          <div className="box" key={record.id}>
           <strong> {record.title}</strong><br/>
           {record.content}<br/>

          { record.tech && record.tech.map(data=>{
            return(
              <div key={record.id}>
                ..{data.name}..
                </div>
            )
          })} 
            </div>
        )
      })
     }
    </div>
  );
}

export default App;
