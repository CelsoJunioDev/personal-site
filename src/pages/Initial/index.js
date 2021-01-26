import React, {useState} from 'react'

export default function Initial() {
const [isOpen, setIsOpen] = useState(false)

const toggle = () =>{
    setIsOpen(!isOpen)
}

    return (
        <>
           <h1>INITIAL</h1>             
        </>
        
    )
}
