import React from 'react'
import "./styles.scss"

const Pagination = (props) => {

  const {postPerPage,totalPosts,paginate} = props

  const pageNumbers =[]

  for(let i=1;i<= Math.ceil(totalPosts/ postPerPage);i++){
    pageNumbers.push(i)
  }

    return (
    <nav>
        <ul className='pagination'>
      {pageNumbers.map((page,index) => {
        return (
        <li key={index} className="page-item">
         <a href="javascript:void(0)"  className='page-link  text-center' onClick={() => {
            paginate(page)
         }}>{page}</a>
        </li>
        )
    })}
        </ul>
    </nav>
  )
}

export default Pagination