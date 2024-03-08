//export default () => ({});
module.exports = ({ env }) => ({
	"netlify-deployments": {
		enabled: true,
		config: {
			accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
			sites: [
				{
					name: 'sensational-stroopwafel-d341e1',
					id: "becee51f-86ec-4545-a0f4-a0421824f41d",
					buildHook: "https://api.netlify.com/build_hooks/65b6bcd52ddcf9a06aabc3e6",
					branch: 'master' // optional
				}
			]
		},
	},
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
	'import-export-entries': {
		enabled: true,
		config: {
			/**
			 * Public hostname of the server.
			 *
			 * If you use the local provider to persist medias,
			 * `serverPublicHostname` should be set to properly export media urls.
			 */
			serverPublicHostname: 'http://localhost:1337', // default: "".
		},
	},
	upload: {
		config: {
			provider: "strapi-provider-upload-do",
			providerOptions: {
				key: env('DO_SPACE_ACCESS_KEY'),
				secret: env('DO_SPACE_SECRET_KEY'),
				endpoint: env('DO_SPACE_ENDPOINT'),
				space: env('DO_SPACE_BUCKET'),
				directory: env('DO_SPACE_DIRECTORY'),
				cdn: env('DO_SPACE_CDN'),
			}
		},
	},
});