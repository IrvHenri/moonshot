import "./footer.css";
import { useState } from "react";
import { AiOutlineDown, AiOutlineTeam } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import TeamMember from "./TeamMember";
import teamMembers from "../../teamData";
const teamData = teamMembers();
const Footer = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <CSSTransition in={toggle} timeout={200} classNames="toggle-footer">
      {!toggle ? (
        <div onClick={() => setToggle((prev) => !prev)} className="footer">
          <span>
            <AiOutlineTeam size={"5em"} />
          </span>
        </div>
      ) : (
        <div className="footer-active">
          <span onClick={() => setToggle((prev) => !prev)}>
            <AiOutlineDown />
          </span>
          <h1>Meet The Team</h1>
          <div className="team-container">
            {teamData.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      )}
    </CSSTransition>
  );
};

export default Footer;
