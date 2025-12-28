import React from "react"
import CreateSell from "../components/CreateSell"
import FeaturedArt from "../components/FeaturedArt"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"
import PopularArtists from "../components/PopularArtists"

const Home: React.FC = () => {
	return (
		<div className='container mx-auto px-4 md:px-8 space-y-32'>
			<Hero />
			<FeaturedArt />
			<CreateSell />
			<PopularArtists />
			<Newsletter />
		</div>
	)
}

export default Home
