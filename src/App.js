import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from './comment.js'

import 엘릿트 from "./엘릿트.jpg"





function App() {
  return (
    <div>
    <Image src = {엘릿트} centered/>
    <Comments/>

    </div>
  );
}

export default App;
