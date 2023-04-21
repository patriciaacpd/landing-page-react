import React from "react";

const Hero = () => {
    return (
        <div className = "row p-5">
			<div className="jumbotron bg-light rounded p-5">
                <h1 className="display-4">A warm welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, cumque ab unde beatae est eaque quia aliquid officia suscipit illo praesentium sint fuga soluta molestias consectetur ipsa qui, a vel.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
		</div>
    );
};

export default Hero;