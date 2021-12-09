import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "./User";
//const apiKey = "2888152ec00da94eef10fefe0d3dbb48"


export function Result() {
  //const context = useContext(UserContext);


  return (
    <div>
      <h1>검사결과</h1>
      <Link to="/main">
        <button>다시 검사하기</button>
      </Link>
    </div>
  )
}
export default Result;