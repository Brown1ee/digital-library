import React, { useContext } from "react";
import ReviewModal from "../ReviewModal";
import { BooksLibraryContext } from "../../App";

const Review = (props) => {
  const { setShowReview, showReview } = useContext(BooksLibraryContext);

  return (
    <div>
      <ReviewModal
        show={showReview}
        onHide={() => setShowReview(false)}
        data={props}
      />
    </div>
  );
};

export default Review;
