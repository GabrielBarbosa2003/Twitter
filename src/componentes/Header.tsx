import {Sparkle} from 'phosphor-react'
import './Header.css'

interface HeaderProps{
    title: String
} 

export function Header(props:HeaderProps){
    return(
        <div className='cabecalho'>
        {props.title}
        <Sparkle/>
      </div>
    )
}