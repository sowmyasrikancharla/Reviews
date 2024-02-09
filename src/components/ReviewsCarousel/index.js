import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  handleNextReview = () => {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    if (activeIndex !== 3) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1,
      }))
    }
  }

  handlePrevReview = () => {
    const {activeIndex} = this.state
    if (activeIndex !== 0) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeIndex
    ]

    return (
      <div className="main-con">
        <h1 className="main-head">Reviews</h1>
        <div className="review-con">
          <img src={imgUrl} alt={username} />
          <div className="sub-con">
            <button
              onClick={this.handlePrevReview}
              className="but"
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="name">{username}</p>
            <button
              onClick={this.handleNextReview}
              className="but"
              data-testid="rightArrow"
            >
              {' '}
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
