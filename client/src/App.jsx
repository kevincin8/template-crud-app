import { useEffect, useState } from "react"

function App() {
  return (
    <>
      <form className=" my-5 mx-auto p-7 shadow-[0px_0px_10px_1px] max-w-[500px] flex flex-col items-center gap-4">
        <input type="text" className="border-2 border-black p-2 px-5 rounded-[5px] font-bold" placeholder="node libro" />
        <input type="text" className="border-2 border-black p-2 px-5 rounded-[5px] font-bold" placeholder="autore" />
        <button className="p-2 rounded-[5px] border-2 bg-green-400 px-10 font-semibold hover:bg-green-500 transition-all duration-300 cursor-pointer">invia</button>
      </form>
    </>
  )
}
export default App