import "./TeamMember.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const TeamMember = ({ name, img, linkedInUrl, gitHubUrl }) => {
  return (
    <div className="member-container">
      <div>
        <img className="member-img" src={img} alt="a gentleman" />
        <div className="member-socials">
          <a href={gitHubUrl}>
            <AiFillGithub size={"3.3em"} />
          </a>
          <a href={linkedInUrl}>
            <AiFillLinkedin size={"3.3em"} />
          </a>
        </div>
      </div>
        <h1>{name}</h1>
    </div>
  );
};

export default TeamMember;
