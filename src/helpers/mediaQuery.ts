const breakpoints = [480, 768, 1280];

const [sm, md, xl] = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const media = { sm, md, xl };

export default media;
