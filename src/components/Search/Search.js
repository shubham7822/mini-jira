import React from 'react'
import {Input} from "reactstrap"
import "./styles.scss"
export default function Search(props) {

    const {placeholder,inputValue,handleChangeCallBack} = props


  return (
    <div>
        <Input
        className="inputSearch"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          handleChangeCallBack(e)
        }}
        />
    </div>
  )
}
