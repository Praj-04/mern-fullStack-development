import React from 'react'
import Card from './Card'
import myImage1 from '../Images/img1.svg'
import myImage2 from '../Images/img2.svg'
import myImage3 from '../Images/img3.svg'
import myImage4 from '../Images/img4.svg'
import myImage5 from '../Images/img5.svg'
import myImage6 from '../Images/img6.svg'



function Mainbody() {
  return (
    <div className='mainContainer'>
        <Card image={myImage1} alt={"Card Sorting image"} heading={"Card Sorting"} para={"Discover how people group and label information."}/>
        <Card image={myImage2} alt={"Prototype tests image"} heading={"Prototype tests"} para={"Discover how people navigate your Figma prototypes."}/>
        <Card image={myImage3} alt={"First click tests image"} heading={"First click tests"} para={"Test interaction with first click and navigation tests."}/>
        <Card image={myImage4} alt={"Design surveys image"} heading={"Design surveys"} para={"Get feedback on images, videos or audio files."}/>
        <Card image={myImage5} alt={"Preference tests image"} heading={"Preference tests"} para={"Find out which designs users prefer and why."}/>
        <Card image={myImage6} alt={"Five second tests"} heading={"Five second tests"} para={"Test comprehensibility by measuring first impressions."}/>



    </div>
  )
}

export default Mainbody