import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getKittys = async () => {
	const query = gql`
		query MyQuery {
			kittyConnection {
				edges {
					node {
						id
						breed
						color
						dateOfBirth
						eyeColor
						availableForPickUpDelivery
						father {
							... on Cat {
								id
								name
								breed
								gender
								photo {
									url
								}
							}
						}
						fullPrice
						furType
						gender
						mother {
							... on Cat {
								id
								name
								breed
								gender
								photo {
									url
								}
							}
						}
						photo {
							url
						}
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);

	return result.kittyConnection.edges;
};

export const getCats = async () => {
	const query = gql`
		query MyQuery {
			catsConnection {
				edges {
					node {
						id
						name
						breed
						gender
						title
						photo {
							url
						}
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);

	return result.catsConnection.edges;
};
export const getCatById = async (id) => {
	const query = gql`
		query GetCatDetails($id: ID!) {
			cat(where: { id: $id }) {
				name
				title
				breed
				gender
				photo {
					url
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query, { id });
	console.log('res', result);

	return result.cat;
};

export const getKittyDetails = async (id) => {
	const query = gql`
		query GetKittyDetails($id: ID!) {
			kittys(where: { id: $id }) {
				name
				color
				breed
				fullPrice
				reservePrice
				furType
				gender
				dateOfBirth
				availableForPickUpDelivery
				photo {
					url
				}
				father {
					... on Cat {
						name
						breed
						gender
						photo {
							url
							id
						}
						id
					}
				}
				mother {
					... on Cat {
						id
						name
						breed
						gender
						photo {
							url
						}
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query, { id });
	console.log('res', result);

	return result.kittys;
};
