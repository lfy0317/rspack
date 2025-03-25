import { rspack } from "@rspack/core";
import * as RefreshPlugin from "@rspack/plugin-react-refresh";
import { isDev } from './common';

export const plugins = [
    new rspack.HtmlRspackPlugin({
        template: "./index.html"
    }),
    isDev ? new RefreshPlugin() : null
].filter(Boolean);