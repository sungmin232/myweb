import React from 'react';
import {Comment, Form, Button, Header} from 'semantic-ui-react'

import i1 from "./i1.png"

class Comments extends React.Component{
  render(){
    return(  <Comment.Group>
     <Header as='h3' dividing>
       Comments
     </Header>

     <Comment>
       <Comment.Avatar src={i1} />
       <Comment.Content>
         <Comment.Author as='a'>Matt</Comment.Author>
         <Comment.Metadata>
           <div>Today at 5:42PM</div>
         </Comment.Metadata>
         <Comment.Text>How artistic!</Comment.Text>
         <Comment.Actions>
           <Comment.Action>Reply</Comment.Action>
         </Comment.Actions>
       </Comment.Content>
     </Comment>



     <Form reply>
       <Form.TextArea />
       <Button content='Add Reply' labelPosition='left' icon='edit' primary />
     </Form>
   </Comment.Group>

)
  }
}

export default Comments
