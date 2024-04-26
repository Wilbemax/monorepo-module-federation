
import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import {BuildMode, BuildPath, BuildOptions, buildWeback} from '@packages/build-config'
import packageJson from './package.json'


interface EnvProps {
	mode: BuildMode;
	port: number;
	analyzer?: boolean;
}

export default (env: EnvProps) => {
	const paths: BuildPath ={
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src' ),
		public: path.resolve(__dirname, 'public'),

	}
	
	const config: webpack.Configuration = buildWeback({
		port: env.port ?? 3001,
		mode: env.mode ?? 'development',
		paths: paths,
		analyzer: env.analyzer
	})

	config.plugins.push(new webpack.container.ModuleFederationPlugin({
		name: 'shop',
		filename: 'remoteEntry.js',
		exposes: {
			'./router': './src/router/Router.tsx'
		},
		shared:{
			...packageJson.dependencies,
			react: {
				eager: true,
				requiredVersion: packageJson.dependencies['react']
			}, 
			'react-router-dom': {
				eager: true,
				requiredVersion: packageJson.dependencies['react-router-dom']
			},
			'react-dom': {
				eager: true,
				requiredVersion: packageJson.dependencies['react-dom']
			}
		}
	}))

	return config;
};
