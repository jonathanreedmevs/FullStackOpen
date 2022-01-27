import React from 'react'

const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }

const Content = ({ course }) => {
    
  const parts = course.parts
    
    return (
      <>
        {parts.map(
          part =>
              <Part key={part.id} part={part}/>
        )}
      </>
    )
  }

export default Content