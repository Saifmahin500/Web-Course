import { useState } from 'react'
import './App.css'
import Cards from './components/card/Cards'
import CourseName from './components/coursename/CourseName'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courseName , setCourseName] = useState([])
  
  const [totalCredit, setTotalCredit] = useState(0)
  const [creditRemaining, SetCreditRemaining] =useState(0)

  const handleAddCourseName = course =>{
  const isExit = courseName.find((item) => item.id === course.id);

  let count = course.credit;
  

  if (isExit) {
    toast.error("already taken",
    {position: toast.POSITION.TOP_CENTER}
    );
    
    
  } else {

    courseName.forEach((item) => {
      count =  parseInt(count) + parseInt(item.credit);
      
    })
     const totalRemaining = 20 - count;
     if (count > 20) {
      toast.warning("Sorry total credit 20hour done . So you can't do it anymore",
      {position: toast.POSITION.TOP_CENTER}
      );
     } else {
      setTotalCredit(count);
     SetCreditRemaining(totalRemaining);

    const newCourse = [...courseName, course]
    setCourseName(newCourse);
    
     }
     
  }
  
  }
  

  return (
    <>
      
      <h1 className='text-3xl font-bold text-center  mb-12 mt-12'>Course Registration</h1>
      
      
      <div className='flex max-w-7xl mx-auto'>
      <Cards handleAddCourseName={handleAddCourseName}></Cards>
      <CourseName courseName={courseName}
      creditRemaining={creditRemaining}
      totalCredit={totalCredit}
      ></CourseName>
      </div>
      
      
      
      
      <ToastContainer />
    </>
  )
}

export default App
