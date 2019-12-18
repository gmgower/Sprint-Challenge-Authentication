
import React, { Component } from 'react'
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';




export default class DadJokes extends Component {
constructor(props) {
    console.log(props)
    super(props);
    this.state = {
        jokes: []
    }
}

componentDidMount() {
    // const token = localStorage.getItem("jwt")
    // const auth = {
    //     headers: {
    //         Authorization: token
    //     }
    // }
    // axios
    axiosWithAuth()
    .get("http://localhost:3300/api/jokes", {headers: {
        // Authorization: localStorage.getItem('token')
        // or
      
    }} )
    
    .then(res => {
        console.log(res)
        this.setState({jokes: res.data})
    })
    .catch(err => {
        console.log("error", err)
    })
}

    render() {
        return (
            <div>
                <h2>Dad Jokes.</h2>
                <div>
                    {this.state.jokes.map(joke => {
                        console.log(joke)

                        return (
                            <div>
                                <p key={joke.id}>{joke.setup}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

