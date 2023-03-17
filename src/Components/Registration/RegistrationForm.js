import React, {useState, useEffect} from 'react'
import { initial, isEmpty } from 'lodash'

import firebase from 'firebase/app';
import 'firebase/database';





// const config = {
//   apiKey: "AIzaSyArFOKk4Sa-_mSlpAwnPp1DjSf7aveNnZY",
//   authDomain: "cruddata-c0822.firebaseapp.com",
//   databaseURL: "https://cruddata-c0822-default-rtdb.firebaseio.com",
//   projectId: "cruddata-c0822",
//   storageBucket: "cruddata-c0822.appspot.com",
//   messagingSenderId: "716291205615"
// };
// firebase.initializeApp(config);
const database = firebase.database();

class RegistrationForm extends React.Component {
    // ADD_NEW_OPEN

    // const values={
    //     name:'',
    //     mobile:'',
    //     email:'',
    //     address:''
    // };
    // const [initialState,setState]=useState(values);
    // const {name,mobile,email,address}=initialState;
    




// ADD_NEW_CLOSE
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    database.ref('users/').on('value', snapshot => {
      this.setState({
        users: snapshot.val()
      });
    });
  }

  addUser = () => {
    const user = {
      name: 'John Doe',
      age: 30
    };
    database.ref('users/').push(user);
  };

  updateUser = (key, name) => {
    database.ref(`users/${key}`).update({ name });
  };

  deleteUser = key => {
    database.ref(`users/${key}`).remove();
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.addUser} className="btn btn-warning">Add User</button>
        {Object.keys(this.state.users).map(key => (
          <div key={key}>
            <div className='border p-5 rounded' >
            <p>Name: {this.state.users[key].name}</p>
            <p>Age: {this.state.users[key].age}</p>
            </div>
            <button onClick={() => this.updateUser(key, 'Jane Doe')} className="btn btn-primary" >Update User</button>
            <button onClick={() => this.deleteUser(key)} className="btn btn-success">Delete User</button>
          </div>
        ))}
      </div>
    );
  }
}

export default RegistrationForm;
