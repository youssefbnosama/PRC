export default function Rules(){

    return(
        <div className='rules-container'>
        <button onClick={(e)=>{e.currentTarget.parentElement.style.display = `none`}}>X</button>
<img className='rules'  /> 
</div>   
    )
}