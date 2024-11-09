import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" ,text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState(" enter text here" );



    return (

        <div className="col-span-full pl-40 pr-40 pt-28">
            <label className="block text-sm/6 font-medium text-gray-900">{props.title} </label>
            <div className="mt-2">

                <textarea rows="10" id='myBox' value={text} onChange={handleOnChange} className="block w-full  justify-center items-center rounded-md border-0 py-1.5 text-gray-900
                 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm/6"></textarea>
            </div>


            <div className="pt-10">
                <button onClick={handleUpClick} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"> Convert To Uppercase</button>
            </div>
        </div>







    )
}
