import React, { useState, useContext } from 'react'; 
import {Link} from 'react-router-dom';
//import { UserContext } from './User';
//import { useHistory } from "react-router";
const UserInfo = () => {
  //const history = useHistory();
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  //const context = useContext(UserContext);
  function Buttn(props) {
    if (props.gender === '' || props.name === '' ) {
      return (
          <button disabled={true}>검사 시작</button>
      )
    } else {
      //context['name'] = props.name;
      //context['gender'] = props.gender;
      return (
        <Link to='/sample'>
          <button>검사 시작</button>
        </Link> 
      )
    }
  }
  return (
      <div className="App">
        <h1> {name}님(성별:{gender}) 직업가치관검사</h1>
        <div id='name'>
          <p>이름</p>
          <input onChange={(event)=> {
            setName(event.target.value);}}></input>
        </div>
        <div id='gender'>
          <p>성별</p>
          <div>
            <input type="radio" id="male" name="gener" value="male" onClick={(event)=> {
            setGender(event.target.value);
            //context['gender'] = gender;
            }}></input>
            <label htmlFor="male">남자</label>
          </div>
          <div>
            <input type="radio" id="female" name="gener" value="female" onClick={(event)=> {
            setGender(event.target.value);}}></input>
            <label htmlFor="female">여자</label>
          </div>
        </div>
        <div>
          <Buttn name={name} gender={gender} />
        </div>
      </div>  
    )
  }


export default UserInfo;
