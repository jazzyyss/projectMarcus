import React, { Component } from 'react';
import './homepage.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Blog from '../../components/blogPreview/blog.component';
import Input from '../../components/input/input.component';
import { fetchBlogsAsync } from '../../redux/blog/blog.actions';
import { isBlogsLoaded } from '../../redux/blog/blog.selector';
import withSpinner from '../../components/with-spinner/with-spinner.component';
const BlogWithSpinner = withSpinner(Blog);

class Homepage extends Component {
    async componentDidMount() {
        const { fetchBlogsAsync } = this.props;
        await fetchBlogsAsync();
    }
    render() {
        const { isLoaded } = this.props;
        const handleChange = e => {
            console.log(e.target.value)
        }
        return (<>
            <div className="blogpageHead">
                <div className="titleHead">Blogs</div>
                <div className="searchBar"> <Input searchBar handleChange={handleChange} placeholder="search..." /> </div>
            </div>
            <BlogWithSpinner isLoading={!isLoaded} />
        </>);
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBlogsAsync: () => dispatch(fetchBlogsAsync())
})
const mapStateToProps = createStructuredSelector({
    isLoaded: isBlogsLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);