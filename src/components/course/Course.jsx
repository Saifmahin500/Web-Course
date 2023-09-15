

const Course = ({course , handleAddCourseName}) => {
    const {cover,title,credit,price,details,icon,icon_2} = course;
    return (
        <div >
            <div className="card w-full h-full bg-base-100 shadow-xl ">
            <figure>
                <img src={cover} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                <p>{details}</p>
                <div className="flex justify-between ">
                    <div className="flex items-center">
                        <img className="w-[24px] h-[24px]" src={icon} alt="" />
                    <h5>price : {price}</h5>
                    </div>
                    <div className="flex items-center">
                        <img className="w-[20px] h-[20px]" src={icon_2} alt="" />
                    <p> Credit :{credit}hr</p>
                    </div>
                </div>
                <div className="card-actions justify-center">
                <button onClick={() => handleAddCourseName(course)} className="btn btn-primary mt-5">Select</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Course;