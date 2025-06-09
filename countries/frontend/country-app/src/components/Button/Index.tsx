
import './styles.css'

export const Button = ({type, title, handleClick}) =>{
    return(
        <button 
        className='button'
        type={type} 
        onClick={handleClick}> {title} </button>
    )
}