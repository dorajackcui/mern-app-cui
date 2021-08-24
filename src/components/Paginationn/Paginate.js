import React from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { Link } from 'react-router-dom'
import useStyle from './styles.js'

export default function Paginate() {

  const classes = useStyle()

  return (
    <Pagination 
      classes={{ul: classes.ul}}
      count={5}
      page={1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem 
          {...item}
          component={Link}
          to={`/posts?page=${1}`}
          />
      )}
    />
      
    
  )
}
