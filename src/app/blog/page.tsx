import React from 'react';
import BlogsPage from '../components/Blogs';
import ViewCounter from './[slug]/ViewCounter';

function Blog() {
    return (
        <div>
            <ViewCounter slug='blogs' />
            <BlogsPage />
        </div>
    );
}

export default Blog;