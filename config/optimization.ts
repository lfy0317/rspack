import { rspack } from "@rspack/core";
import { targets } from './common';

export const optimization = {
    minimizer: [
        new rspack.SwcJsMinimizerRspackPlugin(),
        new rspack.LightningCssMinimizerRspackPlugin({
            minimizerOptions: { targets }
        })
    ]
};
