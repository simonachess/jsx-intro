import Post from "./Post";
import React from "react";

class Content extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        {this.props.posts.map((post) => {
                            return <Post title={post.title} about={post.about} key={post.id} />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Content