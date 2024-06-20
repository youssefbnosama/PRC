import { useNavigate } from 'react-router-dom'
import img from '../images/icon-paper.svg'
import { context } from '../App'
import { useContext, useEffect, useRef, useState } from 'react'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
export default function Challenge(){
    const h2 = useRef(null)
    const one = useRef(null)
    const two = useRef(null)
    let arr = [paper,rock,scissors]
    let navigate = useNavigate()
    let [value,setvalue,score,setScore] = useContext(context)
    let [computer,setComputer] = useState(Math.floor(Math.random() * 3))
    useEffect(()=>{
        const boxShadow = `0px 0px 5px 50px rgba(255, 255, 255, 0.201),0px 0px 10px 100px rgba(255, 255, 255, 0.132),0px 0px 15px 150px rgba(255, 255, 255, 0.064)`
        if(value.length >0){
            const number = value[0].number
           if(number == computer){
            h2.current.innerHTML = `Draw`
           } else{
            if(number == 0 && computer ==1 ){
            h2.current.innerHTML = `you win`
            one.current.style.boxShadow = boxShadow
            setScore(score + 1)
            } else if(number == 0 && computer == 2){
            h2.current.innerHTML = `you lose`
            two.current.style.boxShadow = boxShadow
            setScore(score - 1)
            } else if(number == 1 && computer == 0){
            h2.current.innerHTML = `you lose`
            two.current.style.boxShadow = boxShadow

            setScore(score - 1)
            } else if(number == 1 && computer ==2){
            h2.current.innerHTML = `you win`
            one.current.style.boxShadow = boxShadow

            setScore(score + 1)
            } else if(number == 2 && computer == 0){
                h2.current.innerHTML = `you win`
            one.current.style.boxShadow = boxShadow

                setScore(score + 1)
            } else{
            h2.current.innerHTML = `you lose`
            two.current.style.boxShadow = boxShadow
            setScore(score - 1)

            }
           }
        }
    },[])
    return(
        <div className="challenge">
            <div className="chosen" ref={one}>
                <img src={value.length > 0 && value[0].img} />
            </div>
                <div className='repeat'>
                    <h2 ref={h2}>you lose</h2>
                    <button onClick={()=>{navigate(`/`)}}>play again</button>
                </div>
                <div className='computer' ref={two}>
                    <img src={arr[computer]} />
                </div>
        </div>
    )
}