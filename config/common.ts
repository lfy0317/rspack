export const isDev = process.env.NODE_ENV === "development";
console.log(isDev);

// Target browsers, see: https://github.com/browserslist/browserslist
export const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];
