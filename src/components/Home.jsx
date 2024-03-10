import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import { useState } from 'react';
import { Add } from '../redux/actions/action';
import { useDispatch } from 'react-redux';

const Home = () => {

    const[data,setdata]=useState('')
    console.log(data)

    const dispatch= useDispatch()

    const addData=()=>{
        dispatch(Add(data))
        setdata('')
    }
  return (
    <Section>
    
    <div className="container">
    <section className="mt-3 text-center">
    <h3>Enter your Task</h3>

    <div className="todo col-lg-5 mx-auto d-flex">
    <input className="form-control" name='task' value={data} onChange={(e)=>setdata(e.target.value)}></input>
    <button className="mx-2" onClick={()=>addData()}><AddIcon></AddIcon></button>
    
    
    </div>

    <Todo></Todo>

    </section>
    
    
    </div>
    
    
    
    </Section>
  )
}

export default Home

const Section=styled.div`

button{
    background-color: #ee5253;
    padding: 3px 8px;
    color: #fff;
    border: 1px solid steelblue;
}

`;
