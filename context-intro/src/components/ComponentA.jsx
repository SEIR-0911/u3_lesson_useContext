//imports here!
import React, { useContext } from 'react'
import DataContext from '../DataContext'
import ComponentC from './ComponentC'

export default function ComponentA () {

    const { userInfo, setUserInfo } = useContext(DataContext)

    return (
        <div className="card">
            <h2>This is component A</h2>

            <p> {userInfo.name}'s favorite color is </p>
            <p style ={{ color: userInfo.favColor}}> {userInfo.favColor}</p>
            <p> and his favorite movie and food are {userInfo.favMovie} and {userInfo.favFood}</p>


            <button  onClick={() => setUserInfo({ ...userInfo, favColor: "green" })}>
                Change to Green
            </button>

            <button  onClick={() => setUserInfo({ ...userInfo, favColor: "blue" })}>
                Change to Blue
            </button>
     
            <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            name: "Jeremy"
          })
        }
      >
        Change name back
      </button>


        <ComponentC/>


        </div>

    )
}