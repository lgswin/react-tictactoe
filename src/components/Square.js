import "./Square.css"

const Suqare = ({ onClick, value}) => {

    return (
        <button className='square' 
            onClick={onClick}>
            {value}
        </button>
    )
}

export default Suqare;
