import React from 'react';
import Survey from './Survey';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


class SurveyList extends React.Component {

    // props: chooseSurvey
    constructor(props) {
        super(props);
        this.state = { surveys: null };
    }

    componentDidMount() {
        fetch("http://localhost:8000/surveys/")
            .then(response => response.json())
            .then(
                (surveys) => {
                    this.setState({
                        isLoaded: true,
                        surveys: surveys
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )

    }

    render() {
        const { error, isLoaded, surveys } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            if (surveys) {
                const listItems = surveys.map((survey) =>
                    <Survey chooseSurvey={this.props.chooseSurvey} survey={survey} key={survey.id} />
                );
                return (
                    <div className="SurveyList">
                        <h4>Choose a survey</h4>
                        <Slider
                            dots={true}
                            slidesToShow={3}
                            slidesToScroll={1}
                            autoplay={true}
                            autoplaySpeed={3000}
                        >
                            {listItems}
                        </Slider>
                    </div>
                );
            } else {
                return (
                    <div>
                        No Surveys.
                    </div>
                )
            }
        }
    }
}

export default SurveyList;