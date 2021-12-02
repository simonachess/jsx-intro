import React from "react";
import Search from "./Search";
import posts from "./../data/posts";
import Content from "./Content";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
        }
        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }



    render() {
        const filteredPosts = posts.filter((post) => {
            return post.title.includes(this.state.searchTerm)
        })

        return (
            <div className="main">
                <form>
                    <Search name="search" onSearch={this.handleInputChange} val={this.state.searchTerm} />
                </form>
                <Content posts={filteredPosts} />

            </div>
        )
    }
}

export default Main;