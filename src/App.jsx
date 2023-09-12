import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookmarkBar from "./components/BookmarkBar/BookmarkBar";
import Header from "./components/Header/Header";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [time, setTime] = useState(0);
  const [bookMark, setBookMark] = useState([]);

  const handleTime = (times, blog) => {
    const newTime = time + times;
    setTime(newTime);
    const newBookmark = [...bookMark, blog];
    setBookMark(newBookmark);
  };

  const markasRead = (id) => {
    const previousBook = [...bookMark];
    const newBooks = previousBook.filter((book) => book.id !== id);
    setBookMark(newBooks);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("data.json");
        const data = await response.json();

        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="flex gap-2">
        <Blogs
          markasRead={markasRead}
          handleTime={handleTime}
          blogs={blogs}
        ></Blogs>
        <BookmarkBar bookMark={bookMark} time={time}></BookmarkBar>
      </div>
    </div>
  );
}

export default App;
