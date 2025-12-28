import React from "react"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import { useApp } from "../App"

const Footer: React.FC = () => {
	const { setPage } = useApp()

	const FOOTER_LINKS = [
		{
			title: "Explore",
			links: [
				{ name: "Marketplace", id: "marketplace" },
				{ name: "Collections", id: "marketplace" },
				{ name: "Latest Drops", id: "marketplace" },
				{ name: "Artists", id: "artists" },
			],
		},
		{
			title: "Statistics",
			links: [
				{ name: "Ranking", id: "artists" },
				{ name: "Activity", id: "artists" },
				{ name: "News", id: "community" },
			],
		},
		{
			title: "Company",
			links: [
				{ name: "About Us", id: "home" },
				{ name: "Careers", id: "home" },
				{ name: "Support", id: "community" },
			],
		},
		{
			title: "Resources",
			links: [
				{ name: "Help Center", id: "community" },
				{ name: "Blog", id: "community" },
				{ name: "Terms", id: "home" },
			],
		},
	]

	return (
		<footer className='pt-24 pb-12 mt-20 border-t border-white/5 bg-[#030407]'>
			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20'>
					<div className='lg:col-span-2 space-y-8'>
						<button
							onClick={() => setPage("home")}
							className='text-2xl font-bold tracking-tighter'
						>
							Digital<span className='lime-accent'>Art</span>
						</button>
						<p className='text-white/40 leading-relaxed max-w-sm'>
							Discover NFTs by category, track the latest drop, and follow the
							collections you love. Enjoy the world of digital creation!
						</p>
						<div className='flex gap-4'>
							{[Facebook, Send, Twitter, Linkedin].map((Icon, idx) => (
								<a
									key={idx}
									href='#'
									className='w-10 h-10 rounded-full glass-card border-none flex items-center justify-center hover:bg-lime-accent hover:text-black transition-all'
								>
									<Icon size={18} />
								</a>
							))}
						</div>
					</div>

					{FOOTER_LINKS.map((col) => (
						<div key={col.title} className='space-y-6'>
							<h4 className='font-bold text-lg'>{col.title}</h4>
							<ul className='space-y-4'>
								{col.links.map((link) => (
									<li key={link.name}>
										<button
											onClick={() => setPage(link.id)}
											className='text-white/40 hover:text-white transition-colors text-sm'
										>
											{link.name}
										</button>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className='pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6'>
					<p className='text-white/30 text-sm'>
						© {new Date().getFullYear()} DigitalArt - by abdulatif
					</p>
					<div className='flex gap-8 text-sm text-white/30'>
						<a href='#' className='hover:text-white transition-colors'>
							Privacy Policy
						</a>
						<a href='#' className='hover:text-white transition-colors'>
							Terms & Conditions
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
