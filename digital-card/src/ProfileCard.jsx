import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import medium from './assets/Medium-Icon-Black.svg';

function ProfileCard(props) {
    return (
        <div className="card">
            <div className="profiles">
                <div className="profile">
                    <p>{props.name}</p>
                    <p>{props.title}</p>
                    <p>{props.quote}</p>
                </div>
                <div className="profileImg">
                    <img src={props.image} alt="Profile"></img>
                </div>
            </div>
            <div className="links">
                <a href={props.github} target="_blank" rel="noopener noreferrer" className="socials">
                    <img src={github} alt="GitHub" /><span>GitHub</span>
                </a>
                <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="socials">
                    <img src={linkedin}></img><span>LinkedIn</span>
                </a>
                <a href={props.medium} target="_blank" rel="noopener noreferrer" className="socials">
                    <img src={medium} style={{width: "23px"}}></img><span>Medium</span>
                </a>
            </div>
        </div>
    );
}
export default ProfileCard;
//<a target="_blank" href="https://icons8.com/icon/62856/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> - git