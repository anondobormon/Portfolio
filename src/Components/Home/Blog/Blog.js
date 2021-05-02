import React from 'react';
import './Blog.css'
import img1 from '../../../image/node.png'
import img2 from '../../../image/react.png'
import img3 from '../../../image/js.png'
import img4 from '../../../image/js.png'

const Blog = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div class="card bg-dark text-white cards">
                            <img src={img1} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="card bg-dark text-white cards">
                            <img src={img2} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="card bg-dark text-white cards">
                            <img src={img3} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="card bg-dark text-white cards">
                            <img src={img4} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;