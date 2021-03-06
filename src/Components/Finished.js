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
            <h1>????????? ?????????????????????</h1>
            <p>
            ?????? ????????? ???????????? ????????? ????????? ??? ??????????????? ????????? ????????? ???????????? ?????????????????? ????????????,<br />
            ?????? ????????? ??????????????? ??? ?????? ????????? ?????? ????????? ??? ????????? ???????????????.
            </p>
            <div>
                <Link to='/result'>
                    <button>?????? ??????</button>
                </Link>
            </div>
        </div>
    )
}

export default Finished