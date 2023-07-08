import React from 'react'
import {useState} from "react"
import { cuisineData } from './CuisineData'

const LandingPage = () => {
  return (
    <div className='landing_page'>
        <h2>Food Ordering App</h2>
        <h4>Select Your Cuisine</h4>
        <ul className='cuisine_items'>
            {cuisineData.map(cuisine => (
                <li className='cuisine_listItems'>
                <button>{cuisine?.name}</button>
                </li>
            ))}
        </ul>
        
    </div>
  )
}

export default LandingPage