import {House, Hash, Bell, Envelope, BookmarksSimple, FileText, User, DotsThreeCircle, Sparkle, Pencil} from 'phosphor-react'
import { Link, NavLink} from 'react-router-dom' // Biblioteca que faz o link da pagina

import './Sidebar.css'

import twitterLogo from '../assets/logo-twitter.svg'

export function Sidebar(){
    return(
        <aside className='sidebar'>

        <img src={twitterLogo} className='logo' alt='Logo'/>
        <nav className='menu'>
          <NavLink to='/'>
            <House weight='fill'/>
            <span>Home</span>
          </NavLink>
          <a href=''>
            <Hash/>
          <span>Explore </span>
          </a>
          <a href=''>
            <Bell/>
          <span>Notifications</span>
          </a>
          <a href=''>
            <Envelope/>
          <span>Messages</span>
          </a>
          <a href=''>
            <BookmarksSimple/>
          <span>BookMarks</span>
          </a>
          <a href=''>
            <FileText/>
          <span>Lists</span>
          </a>
          <a href=''>
            <User/>
          <span>Profile</span>
          </a>
          <a href=''>
            <DotsThreeCircle/>
          <span>More</span>
          </a>

        </nav>

        <button className='botao' type='button'>
          <Pencil/>
          <span>Tweet</span>
          </button>

      </aside>
    )

}