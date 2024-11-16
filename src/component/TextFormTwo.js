import React, {  useState } from "react"


export default function TextForm2(props) {

    const [text, setText] = useState("")

    const [darkTextBtn, setDarkTextBtn] = useState(" Enable Dark mode")

    const [myStyle, setMyStyle] = useState({

        color: 'black',

        backgroundColor: 'white'

    })

   
    const countWord = (text) => {

        let wordCount = 0;
        let inWord = false;

        for (let i = 0; i < text.length; i++) {
            // Check if the character is not a space
            if (text[i] !== ' ' && !inWord) {
                inWord = true;
                wordCount++;
            } else if (text[i] === ' ') {
                inWord = false;
            }
        }

        return wordCount

    }

    const buttonDarkMode = () => {
        if (myStyle.color === 'black') {
            setMyStyle({

                color: 'white',

                backgroundColor: 'black'

            })
            setDarkTextBtn("Enable Light mode")
        } else {
            setMyStyle({

                color: 'black',

                backgroundColor: 'white'

            })
            setDarkTextBtn("Enable Dark mode")
        }



    }

    const buttonClick = () => {

        let newText = text.toUpperCase();
        setText(newText)



    }


    const buttonClicklow = () => {

        let newText = text.toLowerCase();
        setText(newText)



    }

    const buttonClickClear = () => {

        let newText = ("");
        setText(newText)



    }
    const buttonChange = (event) => {

        setText(event.target.value);
    }

    return (
        <>
            <div className="col-span-full pl-40 pr-40 pt-28" style={myStyle}>
                <label className="block text-sm/6 font-medium ">{props.heading} </label>
                <div className="mt-2" style={myStyle}>

                    <textarea rows="10" id='myBox' style={myStyle} value={text} onChange={buttonChange} className="block w-full  justify-center items-center rounded-md border-0 py-1.5 text-gray-900
                 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset placeholder:please enter your text
                  focus:ring-indigo-600 sm:text-sm/6"></textarea>


                </div>


                <div className="pt-10   " style={myStyle}>
                    <button onClick={() => {
                        buttonClick()
                    }} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"> Convert To Uppercase</button>

                    <button onClick={() => {
                        buttonClicklow()
                    }} className="px-4 py-2 ml-10 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"> Convert To Lowercase</button>

                    <button onClick={() => {
                        buttonClickClear()
                    }} className="px-4 py-2 ml-10 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"> Clear</button>


                </div>
            </div>

            <div className="col-span-full pl-40 pr-40 pt-10 " style={myStyle} >


                <p>{countWord(text)} Words and {text.length}  Characters</p>
                <br></br>

            </div>

            <div className="col-span-full pl-28 pr-40 pt-10 pb-12 " style={myStyle}>


                <button onClick={() => {
                    buttonDarkMode()
                }} className="px-4 py-2 ml-10 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"> {darkTextBtn}</button>



            </div>



        </>
    )




}