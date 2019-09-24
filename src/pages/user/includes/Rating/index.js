import React from "react";
import "./css/Rating.css";

class Rating extends React.PureComponent {
  state = {
    rating: this.props.rating || null,
    temp_rating: null,
    rated: this.props.rated || 0
  };

  handleMouseover = (rating) => {
    this.setState(prev => ({
      rating,
      temp_rating: prev.rating,
      rated: rating
    }));

    if (this.props.rated === 1) {
      this.setState({rated: 0 });
    }
  }

  handleMouseout = () => {
    this.setState(prev => ({
      rating: prev.temp_rating,
      rated: this.state.rating
    }));

    if (this.state.rated === 1) {
      this.setState({rated: 0 });
    }
  }

  rate = (rating) => {
    this.setState({
      rating,
      temp_rating: rating,
      rated: rating
    });

    if (this.props.rated === 1) {
      this.setState({rated: 0 });
    }
  }

  render() {
    const { rated } = this.state;
    const {stop, start} = this.props;

    let stars = [];
    for (let i = start; i <= stop; i++) {
      let starClass = "ion-ios-star-outline";

      if (rated >= i && rated !== null) {
        starClass = "ion-ios-star";
      }

      stars.push(
        <i
          style={{
            display: "inline-block",
            width: "32px",
            fontSize: "32px",
            overflow: "hidden",
            direction: i ? "ltr" : "rtl"
          }}
          className={starClass}
          // onMouseOver={() => this.handleMouseover(i)}
          onClick={() => this.rate(i)}
          // onMouseOut={() => this.handleMouseout()}
          value={this.props.value(rated)}
        />
      );
    }
    return <div>{stars}</div>;
  }
}


export default Rating;