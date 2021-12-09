import React from 'react'; 
import {Link} from 'react-router-dom';


const Sample = () => {
    return(
        <div>
            <div className="samplequestion">
                <h2>검사 예시</h2>
                <h4>
                직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에
                표시하세요.
                </h4>
            </div>
            <div>
                <input type="radio" name="answer" value="answer1"></input>
                <label htmlFor="answer1">능력 발휘</label>
                <input type="radio" name="answer" value="answer2"></input>
                <label htmlFor="answer2">자율성</label>
            </div>
            <div>
                <Link to='/test'>
                    <button id="teststartbttn">검사 시작</button>
                </Link> 
            </div>
        </div>
    )
}


export default Sample;

