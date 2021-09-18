import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/posts.js'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { Link } from 'react-router-dom'
import useStyle from './styles.js'

export default function Paginate({ page }) {

  const classes = useStyle()
  const dispatch = useDispatch()

  const { totalPages } = useSelector(state => state.posts )

  useEffect(() => {
    
    if(page) dispatch(getPosts(page))
    
  }, [page,dispatch])

  return (
    <Pagination 
      classes={{ul: classes.ul}}
      count={totalPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem 
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
          />
      )}
    />
      
    
  )
}
