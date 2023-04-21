import React from "react";
import logo from '../../img/imghtml.png'

const Card = () => {
  return (
    
				<div className = "col-12 col-md-4 col-lg-3">
					<div className="card w-100 mt-4 mb-4" >
						<img src={logo} className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro temporibus obcaecati, nihil tempore quasi ullam quod ea, doloremque voluptate aliquam quos expedita vitae similique deserunt? Dolorum ratione facilis soluta harum.</p>
							<hr />
							<a href="#" className="btn btn-primary">Find out more!</a>
						</div>
					</div>
				</div>
			
  );
};

export default Card;