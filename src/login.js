function Login2(){
return(
    <div>
    <Input/>
    <Button onClick = { (e) => {
      alert(e.target.vaule)
    } } > 로그인! </Button>
    </div>
  )
}

class Login extends React.Component{
  constructor(){
    super()
    this.state = {id : "아무것도 입력을 안했구만!"}
  }

  render(){
    return(
      <div>
      <Input onChange = { (e) => this.setState({id : e.target.value }) }/>
      <Button  onClick = { (event) => {
        alert(this.state.id)
      } } > login </Button>
      </div>
    )
  }
}
