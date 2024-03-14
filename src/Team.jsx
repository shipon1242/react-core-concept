import { useState } from "react"

export default function Team(){
  const style={
    border:'2px solid blue',
    margin:'15px',
    padding:'15px',
    borderRadius:'15px',
    
  }

  const [teamMember,setTeamMember]=useState(11)
  const handleAdd=()=>{
    const newMember=teamMember+1;
    setTeamMember(newMember)

  }
  const handleRemove=()=>{
    
    setTeamMember(teamMember-1)

  }

    return(<div style={style}>
        <h3>Player:{teamMember} </h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
    </div>)
}