import './Tweet.css'
import {ChatCircle, ArrowClockwise,Heart} from 'phosphor-react'
import { Link } from "react-router-dom" // quase msm coisa que o href, só que ele nao atualiza a pg toda

interface TweetProps{
    conteudo?: String,
    userName?: String,
    arroba?: String,
    image?:string
}

// href linka para onde meu routes aponta, nesse caso o /status
export function Tweet(props:TweetProps){
    return(
        <Link to='/status' className="tweet">  
            <img src={props.image}/>

            <div className='tweet-corpo'>
                <div className='tweet-cabecalho'>
                    <strong>{props.userName}</strong>
                    <span>{props.arroba}</span>
                </div>
                
                <p>{props.conteudo}</p>

                <div className='tweet-pe'>
                    <button type='button'>
                        <ChatCircle/>
                        20
                    </button>

                    <button type='button'>
                        <ArrowClockwise/>
                        20
                    </button>

                    <button type='button'>
                        <Heart/>
                        20
                    </button>

                </div>

            </div>
        </Link>
    )
}