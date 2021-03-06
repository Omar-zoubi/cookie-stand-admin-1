import React, { useState} from 'react';
import "tailwindcss/tailwind.css"
export default function CookieStandForm() {

const [storedValues, setStored] = useState('')

    function createHandler(event){
      event.preventDefault();
      let storedValues = {
        location: event.target.Loc.value,
        min: event.target.MinCst.value,
        max: event.target.MaxCst.value,
        ave: event.target.AVG.value,
      }
      setStored(storedValues)
    }
  
    return (
     <main className="grid w-full p-5 px-10 text-center bg-green-100 justify-items-stretch h-62">
          <form onSubmit={createHandler} className="px-15 py-5 mx-12 bg-green-300 rounded w-4/5justify-self-center">
            <h2 className="p-5 text-2xl">Create Cookie Stand</h2>
            <label className="w-5/6">Location:<input className="w-5/6 m-3 " name="Loc"/></label>
            <section className="py-5">
              <label className="inline-block m-3">Minimum Customuers per Hour<br/><input className="w-60" name="MinCst"/></label>
              <label className="inline-block m-3">Maximum Customuers per Hour<br/><input className="w-60" name="MaxCst"/></label>
              <label className="inline-block m-3">Average Cookies per Sale<br/><input className="w-60" name="AVG"/></label>
              <button className="inline-block m-3 p-8 py-5 m-3 bg-green-400" type="submit">Create</button>
            </section>
          </form>
    
         <section className="text=center p-10">
         <p className='m-5 text-gray-600'>Report Table coming soon ......</p>
          <p className="m-3">{JSON.stringify(storedValues)}</p>
          </section>
        </main>

    )
}