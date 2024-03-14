
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  
const HandleClick=()=>{
  alert('click button')
}
const ClickFourth=(num)=>{
  alert(num+5)
}

  return (
    <>
      
      <h1>React core concept2</h1>
      <Friends></Friends>

      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={HandleClick}>click me</button>
      <button onClick={()=>{alert('click button2')}}>click2</button>
      <button onClick={()=>{ClickFourth(5)}}>click fourth</button>
      
    </>
  )
}

export default App
