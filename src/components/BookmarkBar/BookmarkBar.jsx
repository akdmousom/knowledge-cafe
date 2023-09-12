import './BookmarkBar.css'
import PropTypes from "prop-types";
const BookmarkBar = ({ time, bookMark }) => {

  return (
    <div className="w-1/3">
      <div className="text-xl flex items-center justify-center font-bold text-[#6047EC] w-full h-14 rounded-lg bg-[#6047EC1A]">
        <h2>Spent time on read : {time} min</h2>
      </div>

      <div className="bg-[#1111110D] mt-4 rounded-lg p-4 h-auto w-full">

      <div>
            <h2 className="text-xl font-bold">Bookmarked Blogs : 8</h2>
            
              {
               bookMark.map((i, idx) => <div key={idx} className="bg-[#FFFFFF] p-2 mt-4 rounded-lg"><p>{i.title}</p>
                </div>)
              }
            
          </div>

       
        
      </div>
    </div>
  );
};

BookmarkBar.propTypes = {
  time: PropTypes.number.isRequired,
  bookMark: PropTypes.array.isRequired,
};

export default BookmarkBar;
