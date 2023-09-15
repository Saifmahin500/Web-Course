import { useState } from 'react'
import './App.css'
import Cards from './components/card/Cards'
import CourseName from './components/coursename/CourseName'

function App() {
  const [courseName , setCourseName] = useState([])

  const handleAddCourseName = course =>{
  const isExit = courseName.find((item) => item.id === course.id);
  if (isExit) {
    alert ("already taken");
    
  } else {
    const newCourse = [...courseName, course]
    setCourseName(newCourse);
  }
  
  }
  

  return (
    <>
      
      <h1 className='text-3xl font-bold text-center  mb-12 mt-12'>Course Registration</h1>
      
      
      <div className='flex max-w-7xl mx-auto'>
      <Cards handleAddCourseName={handleAddCourseName}></Cards>
      <CourseName courseName={courseName}></CourseName>
      </div>
      
      
      
      
      
    </>
  )
}

export default App
