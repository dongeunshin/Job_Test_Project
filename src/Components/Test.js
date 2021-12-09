import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
//import { UserContext } from "./user";
const apiKey = "2888152ec00da94eef10fefe0d3dbb48"

function Ques(){
    //const context = useContext(UserContext);

    const [questions,setQuestion] = useState([]);
    const [scores, setScores] = useState({});
    const [currentPage, setCurrentPage] = useState(1); 
    const history = useHistory();
    const lastPage = 6 //parseInt
    useEffect(() => {
        (async function() {
        const url = `http://www.career.go.kr/inspct/openapi/test/questions?apikey=${apiKey}&q=6`
        const response = await axios.get(url);
        setQuestion(response.data.RESULT);
        })();
    },[])

    const result = [];
    const scoressorted = Object.keys(scores).sort();
    for (let i = 0; i < scoressorted.length; i++) {
        let tmp = scoressorted[i] + "=" + scores[scoressorted[i]];
        result.push(tmp);
        //context["answers"] = result.join(" ");
    }
    

    return (
        <div>
            <h1>검사 진행</h1>
            <p>{questions.slice((currentPage - 1) * 5, currentPage * 5).map((q) => (
                <>
                    <p>{q.qitemNo}. {q.question}</p>
                    <input 
                        type='radio' 
                        name={q.qitemNo} 
                        value={q.answerScore01}
                        checked={scores[`B${q.qitemNo}`] === q.answerScore01}
                        onChange={(e) => {
                            setScores({
                                ...scores, [`B${q.qitemNo}`] : e.target.value, 
                            });
                        }}
                    />{q.answer01}
                    <input 
                        type='radio' 
                        name={q.qitemNo} 
                        value={q.answerScore02} 
                        checked={scores[`B${q.qitemNo}`] === q.answerScore02}
                        onChange={(e) => {
                            setScores({
                                ...scores, [`B${q.qitemNo}`] : e.target.value, 
                            });
                        }}
                    />{q.answer02}
                </> 
            ))}</p>

            <div>
                <button onClick={()=>{
                    if (currentPage > 1){
                        setCurrentPage(currentPage-1);
                        
                    }
                    }}>이전</button>
                <button onClick={()=>{
                    if (currentPage < lastPage){
                        setCurrentPage(currentPage+1);    
                    }else{
                        history.push({ pathname: "/finished", result: result.join("")});
                    }
                    }}>{currentPage < lastPage ? "다음" : "제출"}</button>
            </div>
        </div>
    )
}


function Test() {
    return (
        <div className="Test">
            <Ques/>
        </div>
    );
}

export default Test;