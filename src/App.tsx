import { BannerIntro } from './components/BannerIntroProps'

type BannerIntro = {
	theme: 'dark' | 'light'
	title: string
	description: string
	imgMain: string
}

const data: BannerIntro[] = [
	{
		theme: 'light',
		title: 'Consignado INSS',
		description:
			'<p>A principal modalidade de empréstimo para aposentados e pensionistas com desconto na folha de pagamento.</p>',
		imgMain: 'image-01.png',
	},
	{
		theme: 'dark',
		title: 'Consignado',
		description:
			'<p>Entender o sucesso do Empréstimo Consignado no segmento financeiro é muito fácil. Tem um risco baixo de inadimplência e por isso, pode ser liberado para negativados.</p>',
		imgMain: 'image-02.png',
	},
]

function App() {
	return (
		<div className='App'>
			<section>
				{data.map((e, index) => (
					<BannerIntro
						key={index}
						theme={e.theme}
						title={e.title}
						image={`${
							e.imgMain != ''
								? e.imgMain
								: 'image-error.png'
						}`}>
						<div
							dangerouslySetInnerHTML={{
								__html: e.description,
							}}
						/>
					</BannerIntro>
				))}
			</section>
		</div>
	)
}

export default App
