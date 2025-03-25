import { defineConfig } from "@rspack/cli";
import { core } from './config/core';
import { resolve } from './config/resolve';
import { module } from './config/module';
import { plugins } from './config/plugins';
import { optimization } from './config/optimization';

export default defineConfig({
	context: __dirname,
	...core,
	resolve,
	module,
	plugins,
	optimization,
	experiments: {
		css: true
	}
});
