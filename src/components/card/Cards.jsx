import { useEffect, useState } from "react";
import Course from "../course/Course";


const Cards = ({handleAddCourseName}) => {
    const [cards, setCards] = useState([])

    useEffect( () =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCards(data))
    })
    return (
        <div className="w-3/4 ">
           
            <div className="grid grid-cols-3 gap-5  ">
            {
                cards.map((course) => <Course key={course.id} 
                    
                    course={course}
                    handleAddCourseName={handleAddCourseName}></Course>)
            }
            </div>
           
        </div>
    );
};

export default Cards;