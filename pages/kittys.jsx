import Link from 'next/link';
import { CatCart } from '../components/styledcomponents/CatCart';
import { getKittys } from '../services';

const Kittys = ({ kittys }) => {
	return (
		<div>
			{kittys.map((kitty) => (
				<Link href={`kittys/${kitty.node.id}`} key={kitty.node.id}>
					<CatCart>
						<div className='img-link'>
							<img src={kitty.node.photo[0].url} />
						</div>

						<div>
							<h2 className='cart-content__title'>
								<span>Breed: </span>
								{kitty.node.breed}
							</h2>
							<h2 className='cart-content__title'>
								<span>Sex: </span>
								{kitty.node.gender}
							</h2>
							<h2 className='cart-content__title'>
								<span>Collor: </span>
								{kitty.node.color}
							</h2>
							<h2 className='cart-content__title'>
								<span>Pick up/delivery: </span>
								{kitty.node.availableForPickUpDelivery}
							</h2>
						</div>
					</CatCart>
				</Link>
			))}
		</div>
	);
};

export default Kittys;

export async function getStaticProps() {
	const data = await getKittys();

	return {
		props: { kittys: data },
	};
}
