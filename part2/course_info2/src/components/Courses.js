import React from 'react';
import Content from './Content'
import Header from './Header'

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
    
    return (
        <>
            <Header name={name} />
            <Content course={course}/>
            <Total parts={parts} />
        </>
    )
}

const Courses = ({courses}) => {
    
//    console.log(courses);
    


    return(
        <>
            {courses.map(
                course =>
                    <Course key = {course.id} course={course}/>
                )}
        </>
    )
}

export default Courses