import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
/* Changed from useNotification to useApp */
import { useApp } from "../App"

const Hero: React.FC = () => {
	/* Changed from useNotification() to useApp() */
	const { show } = useApp()
	const [timeLeft, setTimeLeft] = useState({ h: "00", m: "00", s: "00" })

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date()
			// Countdown to the end of the current day
			const target = new Date()
			target.setHours(23, 59, 59, 999)

			const diff = target.getTime() - now.getTime()

			if (diff <= 0) {
				setTimeLeft({ h: "00", m: "00", s: "00" })
			} else {
				const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
				const m = Math.floor((diff / (1000 * 60)) % 60)
				const s = Math.floor((diff / 1000) % 60)

				setTimeLeft({
					h: h.toString().padStart(2, "0"),
					m: m.toString().padStart(2, "0"),
					s: s.toString().padStart(2, "0"),
				})
			}
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<section className='pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
				className='space-y-8'
			>
				<h1 className='text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight'>
					Discover and <br />
					Collect The Best <br />
					NFTs <span className='lime-accent italic'>Digital Art.</span>
				</h1>
				<p className='text-white/60 text-lg max-w-lg leading-relaxed'>
					Get started with the easiest and most secure platform to buy and trade
					digital ART and NFTs. Start exploring the world of digital art today!
				</p>

				<div className='flex flex-wrap items-center gap-6'>
					<a
						href='#marketplace'
						className='px-10 py-4 bg-lime-accent text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(212,255,0,0.3)] transition-all inline-block active:scale-95'
					>
						Explore Now
					</a>
					<button
						onClick={() => show("Opening Tutorial...")}
						className='px-10 py-4 border border-white/20 font-bold rounded-full hover:bg-white/5 transition-colors inline-block active:scale-95'
					>
						Learn More
					</button>
				</div>

				<div className='pt-10 flex gap-12'>
					{[
						{ value: "8.9K", label: "Art work" },
						{ value: "65K", label: "Artist" },
						{ value: "87K", label: "Collection" },
					].map((stat) => (
						<div key={stat.label}>
							<h3 className='text-3xl font-bold'>{stat.value}</h3>
							<p className='text-white/40 text-sm'>{stat.label}</p>
						</div>
					))}
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8 }}
				className='relative group'
			>
				<div className='absolute inset-0 bg-lime-accent/10 blur-[80px] group-hover:bg-lime-accent/20 transition-all'></div>
				<div className='relative glass-card rounded-[40px] p-4 overflow-hidden'>
					<img
						src='https://picsum.photos/seed/nft1/800/800'
						alt='Featured NFT'
						className='w-full aspect-square object-cover rounded-[32px] mb-6'
					/>

					<div className='bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center justify-between'>
						<div className='space-y-1'>
							<p className='text-white/40 text-xs uppercase tracking-widest font-bold'>
								Ends in
							</p>
							<p className='text-xl font-mono font-bold tracking-wider'>
								{timeLeft.h}:{timeLeft.m}:{timeLeft.s}
							</p>
						</div>
						<div className='h-10 w-[1px] bg-white/10'></div>
						<div className='space-y-1 text-right'>
							<p className='text-white/40 text-xs uppercase tracking-widest font-bold'>
								Current bid
							</p>
							<p className='text-xl font-bold'>0.24ETH</p>
						</div>
					</div>

					<button
						onClick={() => show("Bid Modal Opening...")}
						className='w-full mt-4 py-4 border border-lime-accent/50 text-lime-accent font-bold rounded-2xl hover:bg-lime-accent hover:text-black transition-all active:scale-95'
					>
						Place A Bid
					</button>
				</div>

				<div className='absolute top-[-20px] left-[-20px] w-24 h-24 flex items-center justify-center animate-spin-slow pointer-events-none'>
					<svg viewBox='0 0 100 100' className='w-full h-full fill-white/20'>
						<path
							id='circlePath'
							d='M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0'
							fill='transparent'
						/>
						<text fontSize='8' letterSpacing='1.5'>
							<textPath xlinkHref='#circlePath'>
								• ARTWORK OF THE WEEK • ARTWORK OF THE WEEK
							</textPath>
						</text>
					</svg>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lime-accent'>
						✦
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Hero
