import { useState } from "react";
import "./App.css";
function App() {
  const[Color,setColor]=useState("pink");
  return (
    <div>
   <div className="w-full h-screen duration-500" style={{backgroundColor:Color}}>
   </div>
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
   <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}}>red</button>
   <button onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"orange"}}>orange</button>
   <button onClick= {()=>setColor("yellow")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"yellow"}}>yellow</button>
   <button onClick={()=>setColor("violet")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"violet"}}>violet</button>
   <button onClick={()=>setColor("purple")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"purple"}}>purple</button>
   <button onClick={()=>setColor("olive")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"olive"}}>olive</button>
   <button onClick={()=>setColor("green")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"green"}}>green</button>
   <button onClick={()=>setColor("brown")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"brown"}}>brown</button>
   <button onClick={()=>setColor("black")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"black"}}>black</button>
   <button onClick={()=>setColor("grey")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"grey"}}>grey</button>
   <button onClick={()=>setColor("pink")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"pink"}}>pink</button>
   <button onClick={()=>setColor("blue")}className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"blue"}}>blue</button>
   </div>
    </div>
    </div>
)
}
export default App
