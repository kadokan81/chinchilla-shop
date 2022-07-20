import Link from 'next/link';
import { SwiperThumb } from '../../components';
import { Container } from '../../components/styledcomponents/Container';
import { GraphLine } from '../../components/styledcomponents/GraphLine';
import { getKittyDetails, getKittys } from '../../services';

const KittyPage = ({ kitty }) => {
	const {
		name,
		breed,
		color,
		father,
		mother,
		fullPrice,
		furType,
		reservePrice,
		gender,
		dateOfBirth,
		availableForPickUpDelivery,
	} = kitty;
	return (
		<Container>
			<SwiperThumb photos={kitty.photo} />
			<div className='decsription'>
				{name && <h3> Name: {name}</h3>}
				<GraphLine>
					<span>Collor: </span> {color}
				</GraphLine>
				<GraphLine>
					<span>Sex: </span> {gender}
				</GraphLine>
				<GraphLine>
					<span>Bred: </span> {breed}
				</GraphLine>
				<GraphLine>
					<span>Father: </span>
					<Link href={`/cat/${father.id}`}>{father.name}</Link>
				</GraphLine>
				<GraphLine>
					<span>Mother: </span>
					<Link href={`/cat/${mother.id}`}>{mother.name}</Link>
				</GraphLine>
				<GraphLine>
					<span>Price Full: </span> {fullPrice} $
				</GraphLine>
				<GraphLine>
					<span>Price Reserve: </span> {reservePrice} $
				</GraphLine>
				<GraphLine>
					<span>Date of Birth: </span> {dateOfBirth}
				</GraphLine>
				<GraphLine>
					<span>Available for pick up/delivery: </span>{' '}
					{availableForPickUpDelivery}
				</GraphLine>
				<GraphLine>
					<Link href={`/conditions`}>Adaptive conditions</Link>
				</GraphLine>
			</div>
		</Container>
	);
};

export default KittyPage;

export async function getStaticProps({ params }) {
	console.log('params', params);
	const data = await getKittyDetails(params.id);

	return {
		props: { kitty: data },
	};
}
export async function getStaticPaths() {
	const kitty = await getKittys();
	return {
		paths: kitty.map(({ node: { id } }) => ({ params: { id } })),
		fallback: false, // See the "fallback" section below
	};
}
