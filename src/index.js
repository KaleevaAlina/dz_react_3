import React from 'react';
import ReactDOM from 'react-dom';

let users = [
	{id: 'uniq1',name: 'Paul'},
	{id: 'uniq2',name: 'Mary'},
	{id: 'uniq3',name: 'Viktor'},
	{id: 'uniq4',name: 'Suzanna'},
	{id: 'uniq5',name: 'Peter'},
	{id: 'uniq6',name: 'Vladislav'},
	{id: 'uniq7',name: 'Anna'},
   ];
  
   let strUser = ' ';
   class UserArr extends React.Component {
    render() {
      for(let i =0; i<users.length;i++){
        strUser += (i+1)+'. '+ 'id: '+users[i].id+' name: '+users[i].name +'; ' ;
        console.log(users[i]);
      }
      return <div>
        <span>Пользователи:<br></br> {strUser}</span>
    </div>;
    }
  }
class UserList extends React.Component {
  render() {
    return <div>
			<span>It's user: </span>
	</div>;
  }
}
class User extends React.Component {
  render() {
    this.props = "Alina";
    return <div>
               <span><UserList />{this.props}</span>
            </div>;
  }
}
const userStyle = {
  color:'red', 
  fontSize: '25px',
  fontFamily:'Verdana'
  

};
const userClassName = 'usStyle';
ReactDOM.render(
  <div  className = {userClassName} style= {userStyle}>
    <User/>
    < UserArr/>
  </div>,
  document.getElementById("root")
)


