import React from "react";

class Card extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}


export default Card;