import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="main">
                <div className="left">
                    <div className="card1">
                        <img src="https://img.freepik.com/free-photo/silhouette-tree-against-moody-sky-generated-by-ai_188544-22440.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid" alt="nature" />
                        <h4>Title</h4>
                        <div className="desc">Description</div>
                        <div className="content">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit explicabo inventore quam molestiae est officia vero adipisci laboriosam aut porro, cum, ullam animi fugit placeat. Beatae ducimus maiores nulla consequatur?
                        </div>
                        <div className="more">
                            <button>Read more</button>
                            <div className="comment-count">
                                Comments: 0
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="card">
                        <img src="https://img.freepik.com/free-photo/silhouette-tree-against-moody-sky-generated-by-ai_188544-22440.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid" alt="nature" />
                        <h4>Title</h4>
                        <div className="desc">Description</div>
                        <div className="content">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit explicabo inventore quam molestiae est officia vero adipisci laboriosam aut porro, cum, ullam animi fugit placeat. Beatae ducimus maiores nulla consequatur?
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home
