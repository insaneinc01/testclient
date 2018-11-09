import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="w-100 bg-white pv2 shadow-4 ph6-ns ph3 flex justify-between items-center fixed top-0">

        <div className="flex justify-start items-center">
          <div className="light-red flex justify-start items-center pv2">
            <ion-icon name="infinite" size="large"></ion-icon>
            <h4 className="tracked mv0"><span className="fw4">THE</span>STORE</h4>
          </div>

          <p className="f7 pl4">FEATURED</p>
          <p className="f7 pl4">CATEGORIES</p>
          <p className="f7 pl4">MORE</p>
        </div>

        <div className="flex justify-start items-center">
          <p className="f7 pr4">SIGN IN</p>
          <div className="w2 h2 br-100 bg-light-red flex justify-center items-center white">
            <ion-icon name="cart" size="small"></ion-icon>
          </div>
        </div>

      </div>
    )
  }
}

export default Header
