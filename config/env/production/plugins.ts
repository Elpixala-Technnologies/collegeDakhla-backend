//export default () => ({});
module.exports = ({ env }) => ({
	graphql: {
		enabled: true,
		config: {
			endpoint: '/graphql',
			generateArtifacts: true,
			artifacts: {
				schema: true,
				typegen: true
			},
			shadowCRUD: true,
			playgroundAlways: true,
			depthLimit: 9,
			amountLimit: 100,
			apolloServer: {
				tracing: false,
			},
		},
	},
});