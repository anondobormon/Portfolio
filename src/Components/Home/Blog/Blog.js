import React from 'react';
import './Blog.css'
import img1 from '../../../image/node.png'
import img2 from '../../../image/react.png'
import img3 from '../../../image/js.png'
import img4 from '../../../image/html.png'
import { Link } from 'react-router-dom';



const blog = [
    {
        title: 'Node Js',
        review: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        update: '3',
        img: img1,
        view: 'blogs'
    },
    {
        title: 'React JS',
        review: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        update: '3',
        img: img2,
        view: 'blogs'
    },
    {
        title: 'Java Script',
        review: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        update: '3',
        img: img3,
        view: 'blogs'
    },
    {
        title: 'HTML',
        review: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        update: '3',
        img: img4,
        view: 'blogs'
    }
]

const Blog = () => {
    return (
        <div id='blog'>
            <div className="container">
                <h1 class='blogs-name'>Blog's</h1>
                <div className="row">

                    {
                        blog.map(blogs =>
                            <div className="col-md-6">
                                <div class="card bg-dark text-white cards">
                                    <img src={blogs.img} class={blogs.img} alt="..." />
                                    <div class="card-img-overlay overly">
                                        <h5 class="card-title">{blogs.title}</h5>
                                        <p class="card-text">{blogs.review}</p>
                                        <p class="card-text">Publish not yet</p>
                                        <a href="https://medium.com/" target='blank'><button className='btn-blog'>View</button></a>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Blog;