

const Course = ({course}) => {
    const {cover,title,credit,price} = course;
    return (
        <div >
            <div className="card  bg-base-100 shadow-xl ">
            <figure>
                <img src={cover} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex justify-between">
                    <h5>price :{price}</h5>
                    <h5> Credit :{credit}</h5>
                </div>
                <div className="card-actions justify-center">
                <button className="btn btn-primary">Select</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Course;