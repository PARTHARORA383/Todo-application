export function Navbar(){

  function signupinfo(){
    <div style={{ background: "green" }}>
    <input style = {{ padding: 10, margin: 10 }}type="text" placeholder="username"></input>
    <input style = {{ padding: 10, margin: 10 }} type="text" placeholder="password"></input>
     </div>
  }

  return <div>
  <button style={{width : 100 , height : 40  , margin : 10}}  
    onClick={signupinfo()}>Signup</button>

  </div>
}