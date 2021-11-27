import {useState} from 'react';
import Person from './Person';
import NewPerson from './NewPerson';
import AgeFilter from './AgeFilter';
import './App.css';

function App() {
  let initialData=[{id:'1as',name:'Amal',age:22},{id:'weq',name:'Akhil',age:20}];
  const [filterGroup,setFilterGroup]=useState('all');
  const [data,setData]=useState(initialData);
  const addData=(newVal)=>{
      setData(prev=>[newVal,...prev]);
  }
  const selectGroup=(group)=>{
      setFilterGroup(group);
  }
  const filterData=(val,filter)=>{
      if(filter==='all'){
        return true;
      }
      else if(filter==="child"){
        if(val.age<=12){
          return true;
        }
      }
      else if(filter==="young"){
        if(val.age>12 && val.age<=25){
          return true;
        }
      }
      else if(filter==="mid"){
        if(val.age>25 && val.age<=50){
          return true;
        }
      }
      else if(filter==="old"){
        if(val.age>50){
          return true;
        }
      }
      return false;
  }
  let filteredList=data.filter((per)=>{return filterData(per,filterGroup)});
  let showList=<p>No data</p>;
  if(filteredList.length!==0){
      showList=filteredList.map((per)=>{return (<Person name={per.name} age={per.age} key={per.id}/>)})
  }
  return (
    <div className="App">
      <NewPerson change={addData}/>
      <AgeFilter onSelect={selectGroup}/>
      {showList}
    </div>
  );
}

export default App;
