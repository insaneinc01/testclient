import React from 'react'
import { Mutation } from 'react-apollo'
import { LOGIN } from '../graphql/mutations'


class AdminLogin extends React.Component {

  state = {
    username: "",
    password: ""
  }

  onChange = e => {
    e.target.value = e.target.value.trim();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    console.log(e);
    e.preventDefault()
    const {username, password} = this.state
    localStorage.setItem("TestApp.token", username + password) //save token in localStorage for all further calls
    this.props.history.push("/admin")
  }

  render() {
    const {username, password} = this.state
    return (
      <Mutation mutation={LOGIN}>
        {(triggerLogin, {data, loading, error}) => {
          return (
            <div className="pt4 w-100 flex justify-center items-center">
              <form className="bg-white pa5 shadow-4 tc br1" onSubmit={async e => {
                e.preventDefault()
                const {data: {login}} = await triggerLogin({variables: {username, password}})
                if (login.token) {
                  localStorage.setItem("TestApp.token", login.token)
                  this.props.history.push("/admin")
                }
              }}>
                <p className="f6 mid-gray mb4 mt0">You need to login to do admin stuff</p>
                <input className="w5 db pa2 mv3 ba b--black-10" onChange={this.onChange} value={this.state.username} name="username" type="text" placeholder="Username" />
                <input className="w5 db pa2 mv3 ba b--black-10" onChange={this.onChange} value={this.state.password} name="password" type="password" placeholder="Password" />
                <button className="w5 db pv2 mt4 bg-light-red reset-button white f6" type="submit" disabled={loading}>{loading ? "Processing..." : "LOGIN"}</button>
                {error && <p className="red f6">{error.graphQLErrors.map(({ message }, i) => (
                  <span key={i}>{message}</span>
                ))}</p>}
              </form>
            </div>
          )
        }}
      </Mutation>
    )
  }
}

export default AdminLogin
