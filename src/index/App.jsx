import React from 'react'
import { connect } from 'react-redux'
import './App.css'
function App(props) {
  fetch('/rest/cities?_' + Date.now())
    .then(res => res.json())
    .then(data => {
      console.log(data)
    });
  return (
    <div>

    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch }
  },
)(App)