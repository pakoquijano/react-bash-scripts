const getTemplate = (name) => {
	return (`
.c-${camelTokebab(name)} {

}
`);
};

const camelTokebab = (string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export default getTemplate;
