import { SwiperThumb } from '../../components';
import { Container } from '../../components/styledcomponents/Container';
import { getCatById, getCats } from '../../services';

const CatCart = ({ cat }) => {
	const { name, breed, gender, title, photo } = cat;
	return (
		<Container>
			<SwiperThumb photos={photo} />
			<div className='decsription'>
				{name && <h3> Name: {name}</h3>}
				<h3>Sex: {gender}</h3>
				<h3> Bred: {breed}</h3>
				<h3>Title: {title}</h3>
			</div>
		</Container>
	);
};

export default CatCart;

export async function getStaticProps({ params }) {
	const data = await getCatById(params.id);

	return {
		props: { cat: data },
	};
}
export async function getStaticPaths() {
	const cat = await getCats();
	return {
		paths: cat.map(({ node: { id } }) => ({ params: { id } })),
		fallback: true, // See the "fallback" section below
	};
}
