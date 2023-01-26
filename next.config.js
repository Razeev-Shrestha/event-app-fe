/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	typescript: {
		tsconfigPath: "./tsconfig.json",
	},
	swcMinify: true,
}

module.exports = nextConfig
