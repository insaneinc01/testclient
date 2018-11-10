import React from 'react'

class Admin extends React.Component {
  componentWillMount() {
    if (!localStorage["TestApp.token"]) {
      this.props.history.push("/admin/login")
    }
  }

  render() {
    return (
      <div className="pv4 w-100 bg-light-green db">
        <p>Admin page this</p>
      </div>
    )
  }
}

export default Admin
