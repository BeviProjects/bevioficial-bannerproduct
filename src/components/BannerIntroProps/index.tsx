import React, { ReactNode } from 'react'
// Component
// atom

// molecule
// organism
import styles from './styles.module.scss'

interface BannerIntroProps {
	theme: 'dark' | 'light'
	title: string
	children: ReactNode
	image: string
}

export const BannerIntro = ({
	theme,
	title,
	children,
	image,
}: BannerIntroProps) => {
	return (
		<div
			className={`${styles.bannerIntro} ${
				theme === 'light' ? styles.bgLight : styles.bgDark
			}`}>
			<div
				className={`${styles.content} bv-container-md ps-relative ds-flex-center flow-col-nw lg:pt-06`}>
				<div className='bv-row h-100 ps-relative z-index-02'>
					<div className='bv-col is-07 ds-flex flow-col-nw gap-lg lg:gap-sm'>
						<div
							className={`${styles.card} ${
								theme === 'light'
									? styles.light
									: styles.dark
							} p-10 ds-flex flow-col-nw justify-start align-start gap-md radius-3xl`}>
							<h1
								className={`display-md font-weight-600 color-${
									theme === 'light'
										? 'violet-40'
										: 'primary-02'
								}`}>
								{title}
							</h1>
							<div
								className={`font-size-lg color-${
									theme === 'light'
										? 'gray-50'
										: 'primary-03'
								}`}>
								{children}
							</div>
						</div>
					</div>
					<div className='bv-col lg:ds-none'></div>
				</div>
				<div
					className={`${styles.image} bottom-0 z-index-01`}
					style={{
						backgroundImage: `url(/src/assets/image/${image})`,
					}}
				/>
			</div>
		</div>
	)
}
