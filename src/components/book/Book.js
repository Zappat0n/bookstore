import React from 'react';
import PropTypes from 'prop-types';
import Progress from '../Progress';
// import progressPicture from '../../assets/progress.png';
import './Book.css';

const Book = (props) => {
  const { book, handleChange } = props;
  const progressPercentage = Math.floor(Math.random() * 90);
  const currentChapter = Math.floor(Math.random() * 10);
  return (
    <div className="Lesson-Panel">
      <div className="left-side">
        <div className="category">{book.category}</div>
        <div className="title">{book.title}</div>
        <div className="link author">Suzanne Collins</div>
        <div className="bottom-row">
          <div className="link br">Comments</div>
          <button
            className="link br ml"
            type="button"
            onClick={(event) => handleChange(event, book)}
          >
            Remove
          </button>
          <div className="link ml">Edit</div>
        </div>
      </div>
      <div className="center-side">
        <div>
          {/* <img
            className="progress-picture"
            src={progressPicture}
            alt="progress"
          /> */}
          <Progress percentage={progressPercentage} size={65} />
        </div>
        <div className="right">
          <p className="percentage">{`${progressPercentage}%`}</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="right-side">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter">{`Chapter ${currentChapter}`}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Book;
