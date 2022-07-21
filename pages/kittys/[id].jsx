import Link from 'next/link';
import { useRouter } from 'next/router';
import { SwiperThumb } from '../../components';
import Loader from '../../components/Loader';
import { BackButton } from '../../components/styledcomponents/BackButton';
import { Container } from '../../components/styledcomponents/Container';
import { GraphLine } from '../../components/styledcomponents/GraphLine';
import { getKittyDetails, getKittys } from '../../services';

const KittyPage = ({ kitty }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Loader />;
	}
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
				{name && (
					<GraphLine>
						<span>Name: </span> {name}
					</GraphLine>
				)}
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

				<BackButton onClick={() => router.back()}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M8.51465 20H4.51465C3.41008 20 2.51465 19.1046 2.51465 18V6C2.51465 4.89543 3.41008 4 4.51465 4H8.51465V6H4.51465V18H8.51465V20Z'
							fill='white'
						/>
						<path
							d='M13.8422 17.385L15.2624 15.9768L11.3432 12.0242L20.4861 12.0242C21.0384 12.0242 21.4861 11.5765 21.4861 11.0242C21.4861 10.4719 21.0384 10.0242 20.4861 10.0242L11.3239 10.0242L15.3044 6.0774L13.8962 4.6572L7.50527 10.9941L13.8422 17.385Z'
							fill='white'
						/>
					</svg>
					Go Back
				</BackButton>
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
		fallback: false,
	};
}
