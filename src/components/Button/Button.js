import React from 'react'
import {Button} from "reactstrap"
import "./styles.scss"

function ButtonComp(props) {

    const {btnText,handleClickCallBack} = props

  return (
    <Button className="globalButton" onClick={(e) => {
        handleClickCallBack(e)
    }}>
      {btnText}
    </Button>
  )
}

export default ButtonComp