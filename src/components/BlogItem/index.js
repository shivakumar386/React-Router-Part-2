import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {id, title, description, publishedDate} = blogsList
  return (
    <li className="list-elements-blog">
      <div className="blog-heading-container">
        <h1 className="user-heading">{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
