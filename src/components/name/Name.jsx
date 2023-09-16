

const Name = ({name,idx}) => {
    const {title} = name;
    return (
        <div>
            <h3>{idx + 1}.{title}</h3>
        </div>
    );
};

export default Name;