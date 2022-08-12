const sizes = {
  phone: "37.5em", //600px
  tabport: "56.25em", //900px
  tabland: "75em", //1200px
  bigdesktop: "112.5em", //1800px
};

export const mediaQueries = {
  phone: `@media screen and (max-width: ${sizes.phone})`,
  tabport: `@media screen and (max-width: ${sizes.tabport})`,
  tabland: `@media screen and (max-width: ${sizes.tabland})`,
  bigdesktop: `@media screen and (max-width: ${sizes.bigdesktop})`,
};

export const devices = {
  phone: `(max-width: ${sizes.phone})`,
  tabport: `(max-width: ${sizes.tabport})`,
  tabland: `(max-width: ${sizes.tabland})`,
  bigdesktop: `(max-width: ${sizes.bigdesktop})`,
};
