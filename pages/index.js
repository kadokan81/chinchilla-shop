import Image from 'next/image';
import { Container } from '../components/styledcomponents/Container';
import {
	SectionMain,
	MainContent,
} from '../components/styledcomponents/SectionMain';
import { getCats, getKittys } from '../services';
import styles from '../styles/Home.module.css';
import kitty from '../public/main-cat.webp';

export default function Home() {
	return (
		<SectionMain>
			<Container>
				<MainContent>
					<div className='content-main'>
						<h1>Chinchilla Cat Personality and Behavior</h1>
						<p>
							Chinchilla is a good-natured creation of silver or golden color,
							whose main task is to delight the owner with its cute appearance
							and exemplary behavior. Unobtrusive, but extremely affectionate,
							chinchillas are the type of pets that will never annoy with
							leprosy and violate established boundaries. Accordingly, if you
							need a well-mannered and slightly phlegmatic friend, settle a
							chinchilla cat at home – warm relations and peace are guaranteed!
						</p>
					</div>
					<div className='main-image'>
						<Image src={kitty} alt='kitty' />
					</div>
				</MainContent>
			</Container>
		</SectionMain>
	);
}

export async function getStaticProps() {
	const data = await getKittys();
	const catsdata = await getCats();

	return {
		props: { kittys: data, cats: catsdata },
	};
}
