import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
	Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

	return defineConfig({
		base:
			process.env.NODE_ENV === 'production'
				? `${process.env.BASE_URL}`.length === 0 || !process.env.BASE_URL
					? '/'
					: `/${process.env.BASE_URL}/` // prod
				: '/', // dev,
		plugins: [react()],
	});
};

/**
 * ENV IN VITE.CONFIG.TS:
 * https://github.com/vitejs/vite/issues/1930#issuecomment-986088066
 * https://stackoverflow.com/questions/66389043/how-can-i-use-vite-env-variables-in-vite-config-js
 * https://vitejs.dev/guide/env-and-mode.html
 *
 * https://vitejs.dev/config/
https://stackoverflow.com/questions/68380194/tranform-vue-config-js-to-vite-config-js-build-path
 */
