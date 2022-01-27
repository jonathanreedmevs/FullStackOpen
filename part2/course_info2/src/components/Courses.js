import React from 'react';

import Course from './Course'

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