

const Course = ({course}) => {
    const {cover,title,credit,price,details,icon,icon_2} = course;
    return (
        <div >
            <div className="card w-[312px] h-[500px] bg-base-100 shadow-xl ">
            <figure>
                <img src={cover} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                <p>{details}</p>
                <div className="flex justify-between font-semibold">
                    <div className="flex">
                        <img className="w-[24px] h-[24px]" src={icon} alt="" />
                    <h5>price : {price}</h5>
                    </div>
                    <div className="flex">
                        <img className="w-[24px] h-[24px]" src={icon_2} alt="" />
                    <h5> Credit :{credit}</h5>
                    </div>
                </div>
                <div className="card-actions justify-center">
                <button className="btn btn-primary mt-5">Select</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Course;