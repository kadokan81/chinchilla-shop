import Image from 'next/image';
import Link from 'next/link';
import { CatCart } from '../components/styledcomponents/CatCart';
import { Container } from '../components/styledcomponents/Container';
import { getCats } from '../services';

const CatsPage = ({ cats }) => {
	return (
		<Container>
			{cats.map((cat) => (
				<Link href={`cat/${cat.node.id}`} key={cat.node.name}>
					<CatCart>
						<div className='img-link'>
							<Image
								src={cat.node.photo[0].url}
								alt={cat.node.breed}
								width={'100%'}
								height={'100%'}
								layout='responsive'
							/>
						</div>

						<div className='cart-content'>
							<h2 className='cart-content__title'>
								<span>Name:</span> {cat.node.name}
							</h2>
							<h2 className='cart-content__title'>
								<span>Breed:</span> {cat.node.breed}
							</h2>
							<h2 className='cart-content__title'>
								<span>Sex:</span> {cat.node.gender}
							</h2>
							<h2 className='cart-content__title'>
								<span>Title:</span> {cat.node.title}
							</h2>
						</div>
					</CatCart>
				</Link>
			))}
		</Container>
	);
};

export default CatsPage;

export async function getStaticProps() {
	const catsdata = await getCats();

	return {
		props: { cats: catsdata },
	};
}
