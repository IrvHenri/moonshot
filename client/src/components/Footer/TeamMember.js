import './TeamMember.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
const TeamMember = ({name, img, bio}) => {
  return <div className='member-container'>
    <div className='member-img'>Image Div</div>
    <div className='member-info'>
    <h1>Frank</h1>
    <p>This is my bio, what's good?</p>
    </div>
    <div className='member-socials'>
      <AiFillGithub size={"5em"} />
      <AiFillLinkedin size={"5em"}/>
    </div>
  </div>
}

export default TeamMember