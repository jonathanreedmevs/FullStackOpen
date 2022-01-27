import React from 'react'
import Header from './Header'
import Content from './Content'

const Total = ({ parts }) => {
    //console.log(parts);
    

    const sum = parts.reduce((prev, curr) => {
        if(isNaN(prev.exercises)){
            return prev + curr.exercises;
        }
        
        return prev.exercises + curr.exercises})
    return(
      <b><p>Number of exercises {sum}</p></b>
    ) 
  }

const Course = ({course}) => {
    
    const name = course.name
    const parts = course.parts
    //console.log(parts);
    
    return (
        <>
            <Header name={name} />
            <Content course={course}/>
            <Total parts={parts} />
        </>
    )
}

export default Course