import { useEffect } from "react"
import { useState, useCallback } from "react"
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pass, setPass] = useState("")
  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~`!@#$%^&*()_+<>?/:"
    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    } setPass(pass)

  }, [length, numberAllowed, charAllowed, setPass])
  useEffect(() =>{
    passGenerator()
  },[length,numberAllowed,charAllowed,passGenerator])

  return (
    <>

      <div className="w-full max-w-[800px] mx-auto shadow-lg overflow-hidden 
    rounded-lg px-5 py-12 mt-10 bg-gray-800 
       "><h1 className="text-white text-center">
          Password Generator</h1>
        <div className="flex shadow rounded lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  ">copy</button></div>
          <div className="flex text-sm gap-x-2 text-white">
            <div className="flex items-center gap-x-1">
              <input 
              type="range"
              min={8}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label >Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1 ">
              <input type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={()=> {setNumberAllowed((prev)=>!prev)}}
                />
                <label htmlFor="numberInput">NUMBERS</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={()=> {setCharAllowed((prev)=>!prev)}}
                />
                <label htmlFor="charInput">CHARACTERS</label>
            </div>
          </div>

        </div>
      



    </>
  )
}

export default App
