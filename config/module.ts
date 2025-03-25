import { targets, isDev } from "./common";

export const module = {
    rules: [
        {
            test: /\.svg$/,
            type: "asset"
        },
        {
            test: /\.(jsx?|tsx?)$/,
            use: [
                {
                    loader: "builtin:swc-loader",
                    options: {
                        jsc: {
                            parser: {
                                syntax: "typescript",
                                tsx: true
                            },
                            transform: {
                                react: {
                                    runtime: "automatic",
                                    development: isDev,
                                    refresh: isDev
                                }
                            }
                        },
                        env: { targets }
                    }
                }
            ]
        },
        {
            test: /\.module.less$/i,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            strictMath: true,
                        },
                    },
                },
            ],
        },
    ]
};
