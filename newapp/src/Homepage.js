import React from 'react';
import "./Homepage.css"

const Homepage = () => {
	return (
		<main className='Homepage'>
			<nav className="navbar">
				<ul>
					<li>
						<h1 className='logo'>Online-Examination</h1>
					</li>
				</ul>
			</nav>
			<section className='content'>
				<h1>Hi buddy!</h1>
				<h3>Welcome to the <span>Examination</span> .</h3>
			</section>
			<section className='button'>
				<button>Login</button>
			</section>
		</main>
	);
}

export default Homepage;
