import React,{useState} from 'react';


const Header = ({title}) => {
    return(
    <header>
        <h1>{title}</h1> 
    </header>
    )
}


const Notes = () =>{
 
  const [noteState, setNoteState] = useState([]);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [active, setActiveNote] = useState(false);

  const handSubmit = (e)=> {
    e.preventDefault();
    setNoteState((preValue)=> [...preValue,{title,note}]);
    setTitle('');
    setNote('');
    setActiveNote(false)
  }
  const deleteNote =(id)=>{
    setNoteState((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }



  console.log('noteSteate', noteState);


return(
  <form className='create-note' onSubmit={handSubmit}>
    {!active ? (<input placeholder='Take a note...' value={title} onChange={(e)=> {setTitle(e.target.value)}} onClick={ ()=> setActiveNote(true)}/>) :( 
    <>
    <input placeholder='Title' value={title} onChange={(e)=> {setTitle(e.target.value)}}/>
    <input placeholder='Take a note...' value={note} onChange={(e)=> setNote(e.target.value)}/>
    </>
    )}
    <button className='delete'> + </button>
    {noteState && noteState.map((note, index)=>
    (<div className='note' key={index}>
      <h1>{note.title}</h1>
      <p>{note.note}</p>
      <button onClick={()=>deleteNote(index)}> - </button>
    </div>))}
  </form>
)
}
// import { useState, useEffect } from 'react';


const App = () =>{

    return(<>
    <Header title='Keeps'/> 
    <Notes/>
    </>
    )
}

export default App;
