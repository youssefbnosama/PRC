import scissors from '../images/icon-scissors.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../App'
export default function Game(){
    const [value,setvalue] = useContext(context)
    const navigate = useNavigate()
    function click (e){
        if(e == `paper`){
            setvalue([{number:0,img:paper,}])
        } else if(e == `rock`){
            setvalue([{number:1,img:rock,}])
        } else{
            setvalue([{number:2,img:scissors,}])
        }
        navigate(`challenge`)
    }
    return(
        <div className="traingle" >
            <div className='container'>
            <div id='paper' className='paper signs' onClick={(e)=>{click(e.currentTarget.id)}}><img src={paper} /></div>
            <div id='rock' className='rock signs' onClick={(e)=>{click(e.currentTarget.id)}}><img src={rock} /></div>
            <div id='scissors' className='scissors signs' onClick={(e)=>{click(e.currentTarget.id)}}><img src={scissors} /></div>   
            </div>

        </div>
    )
}