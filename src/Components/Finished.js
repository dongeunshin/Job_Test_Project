import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
//import Test from "./Test";
const apiKey = "2888152ec00da94eef10fefe0d3dbb48"
const Finished = ({location}) =>  {
    const [mostWorst, setMostWorst] = useState({most: [{},{}], worst: [{},{}]});

    useEffect(() => {
        (async function() {
        const date = new Date();
        const param = {
              "apikey": "2888152ec00da94eef10fefe0d3dbb48",
              "qestrnSeq": "6",
              "trgetSe": "100209",
              "name": "namw",//state.user.name,
              "gender": "100323",//state.user.gender === "man" ? "100323" : "100324",
              "startDtm": date.getTime(),
              "answers": "", //result.join(" "),
            }
    

        const url = `http://www.career.go.kr/inspct/openapi/test/report?apikey=${apiKey}&qestrnSeq=6`
        const response = await axios.post(url, param, {headers: {
            "Content-Type": "application/json"
          }})
  

        
        const seq = response.data.RESULT.url.split('=')[1];
        const scoreUrl = `https://www.career.go.kr/inspct/api/psycho/report?seq=${seq}`;
        const scoreRes = await axios.get(scoreUrl, {headers: {
            "Content-Type": "application/json"
          }})
        //setResultUrl(response.data.RESULT.url)

        const score = scoreRes.data.result.wonScore.split(' ').filter(el=>el);
        const scores = score.map(s => {
          s = s.split("=");
          return {"no": s[0], "type": s[0], "count": s[1]}
        })

        const sortedScore = [...scores].sort((a, b) => a.count - b.count)


        setMostWorst(() => {
          return {
            most: sortedScore.slice(-2),
            worst: sortedScore.slice(0, 2)
          }
        })
      })();
    },[])

    //const location = useLocation();
    // const result = location.result;
    // useEffect(() => {
    //   console.log(result)
    // },[]);

    return (
        <div>
            <h1>검사가 완료되었습니다</h1>
            <p>
            검사 결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,<br />
            중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
            </p>
            <div>
                <Link to='/result'>
                    <button>결과 보기</button>
                </Link>
            </div>
        </div>
    )
}

export default Finished