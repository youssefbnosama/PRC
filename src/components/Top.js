import { useContext } from "react"
import { context } from "../App"
export default function Top(){
  const [,,score,] = useContext(context)
    return(
        <div className='top'>
        <ul className='game'>
          <li>Rock</li>
          <li>Paper</li>
          <li>Scissors</li>
        </ul>
        <ul className='score'>
          <li>score</li>
          <li>{score}</li>
        </ul>
      </div>  
    )
}