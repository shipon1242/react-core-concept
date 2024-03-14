import { useEffect, useState } from "react"

export default function Users(){

    const [users,SetUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => SetUsers(data))
    },[])
    return (
        <div>
       <h3>users:{users.length}</h3>
        </div>
    )
}