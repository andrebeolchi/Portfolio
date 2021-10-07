import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Graduation from '../components/Graduation'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection/>
            <Graduation/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo }/>
            <InfoSection {...homeObjThree }/>
            <InfoSection {...homeObjFour }/>
        </>
    )
}

export default Home
