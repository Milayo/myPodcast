const sizes = {
  phone: "37.5em",
  tabport: "56.25em",
  tabland: "75em",
  bigdesktop: "112.5em",
};

export const mediaQueries = {
  phone: `@media screen and (max-width: ${sizes.phone})`,
  tabport: `@media screen and (max-width: ${sizes.tabport})`,
  tabland: `@media screen and (max-width: ${sizes.tabland})`,
  bigdesktop: `@media screen and (max-width: ${sizes.bigdesktop})`,
};

export const devices = {
  phone: ` (max-width: ${sizes.phone})`,
  tabport: ` (max-width: ${sizes.tabport})`,
  tabland: ` (max-width: ${sizes.tabland})`,
  bigdesktop: ` (max-width: ${sizes.bigdesktop})`,
};
