import reactLogo from './assets/react.svg'
import './SubjectList.css'

function SubjectList(props){
    return(
        <>
        <div className="subject-container">
            <h2 className="subject-title">Danh Sách Môn Học</h2>
            <ul className="subject-list">
                {props.subjects.map((subject, index) => (
                    <li className="subject-item" key={index}>
                        {subject}
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}
export default SubjectList;
