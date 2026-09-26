export const jsonScript = (value) => JSON.stringify(value, null, 2).replace(/</g, "\\u003c");
