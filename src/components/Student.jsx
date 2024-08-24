import React from 'react'
import PropTypes from "prop-types"

const Student = (props) => {
  return (
    <div>
      <div>hello everyone</div>
      <p>name:{props.name} age:{props.age}</p>
    </div>
  )
}

Student.PropTypes = {
  
}

Student.defaultProps = {
  name:"student name",
  age : 21
}
export default Student
