import Card from "./UI/Card";
import React from "react";

class Post extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Card>
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection"></i></div>
                <h2 className="fs-4 fw-bold">{this.props.title}</h2>
                <p className="mb-0">{this.props.about}</p>
            </Card>

        )
    }

}

export default Post;