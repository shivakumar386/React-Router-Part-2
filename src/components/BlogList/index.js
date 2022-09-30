import BlogItem from '../BlogItem/index'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="home-ul">
      {blogsList.map(eachBlog => (
        <BlogItem blogsList={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
