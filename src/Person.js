import Card from './Card';
import {useState} from 'react';

const Person=(props)=>{
    const [name,setName]=useState(props.name);
    const [age,setAge]=useState(props.age);
    const buttonClickHandler=()=>{
        setAge(prev=>prev+1);
        setName("Changed");
    }
    return (
        <Card>
            <p>My name is {name}</p>
            <p>I am {age} years old</p>
            <button onClick={buttonClickHandler}>Click me</button>
        </Card>
    );
}

export default Person;