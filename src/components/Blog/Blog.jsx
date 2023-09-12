import './Blog.css'
import boy from "../../assets/images/boy1.png";
import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";

const Blog = ({ blog, handleTime, markasRead }) => {
   
    
  const {
    author,
    content,
    cover_image,
    date,
    id,
    reading_time_minutes,
    tags,
    title,
  } = blog;

  




  return (
    <div className=" w-2/3">

      <div>
        <img className="rounded-lg" src={cover_image} alt="" />
        <div className="flex items-center justify-between">
          <div className="flex mt-2 gap-2">
            <img className="w-14 h-14" src={boy} alt="" />
            <div>
              <h4 className="text-2xl font-bold">{author}</h4>
              <p className="text-base font-semibold text-[#11111199]">{date}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <p className=" text-xl font-medium">
              {reading_time_minutes} min read
            </p>
            <button onClick={()=> handleTime(reading_time_minutes, blog)} >
              <FaBookmark />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold">{title}</h2>
        {
            <p>{content.slice(0, 80)}...</p>
        }
        {
            tags.map((hastag, idx) => <span className="hastag" key={idx}>#{hastag}</span>)
        }

        <p onClick={()=> markasRead(id)} className='text-[#6047EC] text-xl font-semibold underline cursor-pointer'>Mark As Read</p>
        </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleTime: PropTypes.func.isRequired,
  markasRead: PropTypes.func.isRequired,

};

export default Blog;
