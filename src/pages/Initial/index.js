import React, {useState} from 'react'
import Sidebar from '../../components/Sidebar'
import Contact from '../Contact'

export default function Initial() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Contact/>           
        </>
        
    )
}
