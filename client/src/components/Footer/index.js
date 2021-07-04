import './footer.css'
import { useState } from 'react'
import { AiOutlineDown, AiOutlineTeam} from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group'
import TeamMember from './TeamMember'
const Footer = () => {
  const [toggle, setToggle] = useState(false)
  return   <CSSTransition   
  in={toggle} 
  timeout={200} 
  classNames="toggle-footer"> 
  {!toggle ?
  <div onClick={() => setToggle(prev => !prev)} className="footer">
    <span><AiOutlineTeam size={"5em"} /></span>
  </div>
  :
  <div className='footer-active'> 
    <span onClick={() => setToggle(prev => !prev)}><AiOutlineDown /></span>
    <TeamMember />
    <TeamMember />
    <TeamMember />
  </div>}
  </CSSTransition>
}

export default Footer