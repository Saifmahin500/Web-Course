import Name from "../name/Name";


const CourseName = ({courseName}) => {
    return (
        <div className="p-5 bg-base-100 shadow-xl ml-8">
            <h1 className="text-xl font-bold text-center mb-4">Course Name </h1>
            {
                courseName.map(name => <Name key={name.id} name={name}></Name> )
            }
            <br />
            <hr />
        </div>
    );
};

export default CourseName;