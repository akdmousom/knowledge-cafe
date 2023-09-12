import './Blogs.css'
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({blogs, handleTime, markasRead}) => {
  
    return (
        <div className='flex flex-col gap-8 flex-1'>
        {
            blogs.map((blog, idx) => <Blog markasRead={markasRead} handleTime={handleTime} key={idx} blog={blog}></Blog>)
        }
        </div>
    );
};

Blogs.propTypes ={
    blogs : PropTypes.array.isRequired,
    handleTime: PropTypes.func.isRequired,
    markasRead: PropTypes.func.isRequired,
    
}

export default Blogs;