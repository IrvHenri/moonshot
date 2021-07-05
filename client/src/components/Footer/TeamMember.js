import "./TeamMember.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const TeamMember = ({ name, img, bio, linkedInUrl, gitHubUrl }) => {
  return (
    <div className="member-container">
      <img className="member-img" src={img} alt="a gentleman" />
      <div className="member-info">
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
      <div className="member-socials">
        <a href="http://www.github.com/">
          <AiFillGithub size={"3.3em"} />
        </a>
        <a href="http://www.linkedIn.com/">
          <AiFillLinkedin size={"3.3em"} />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
