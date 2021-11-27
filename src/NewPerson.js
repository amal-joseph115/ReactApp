import {useState} from 'react';
import Card from './Card';

const NewPerson=(props)=>{
    const [nameVal,setName]=useState('');
    const [ageVal,setAge]=useState('');
    const [showForm,setShowForm]=useState(false);

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        let data={
            id: Math.random().toString(),
            name:nameVal,
            age:parseInt(ageVal)
        };
        props.change(data);
        setName('');
        setAge('')
        setShowForm(false);
    }
    const nameChangeHandler=(event)=>{
        setName(event.target.value);
    }
    const ageChangeHandler=(event)=>{
        setAge(event.target.value);
    }
    const viewToggler=()=>{
        setShowForm(true);
    }

    let buttonStyle={
        backgroundColor: 'green',
        color:'white',
        height:'50px',
        width:'200px',
        margin:'10px auto',
        borderRadius:'30px'
    }
     //setStyle(styleOne);
    if(showForm){
        return (
            <Card>
                <form onSubmit={formSubmitHandler}>
                    <div>
                        <label>Name:</label>
                        <input type="text" onChange={nameChangeHandler} value={nameVal}/>
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="number" min='0' step='1' onChange={ageChangeHandler} value={ageVal}/>
                    </div>
                    <button type="submit">Add person</button>
                </form>
            </Card>  
        );
    }
    else{
        return (
            <Card>
                <button onClick={viewToggler} style={buttonStyle}>Add new person</button>
            </Card>
        )
    }

}
export default NewPerson;