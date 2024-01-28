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
});