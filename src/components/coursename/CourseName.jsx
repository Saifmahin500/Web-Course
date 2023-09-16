import Name from "../name/Name";


const CourseName = ({courseName,totalCredit,creditRemaining}) => {
    return (
        <div className="p-4 h-[350px] bg-base-100 shadow-xl ml-8">
            <h1 className=" font-bold text-[#4a07da] mb-2">Credit Hour Remaining : {creditRemaining}hr</h1>
            <hr />
            <h1 className="text-xl font-bold text-center mb-4 ">Course Name </h1>
            {
                
                    courseName.map((name,idx)  => <Name key={name.id} idx={idx} name={name}></Name> )
                
            }
            <br />
            <hr />
            <h1 className=" font-medium">Total Credit Hour : {totalCredit}hr</h1>
        </div>
    );
};

export default CourseName;