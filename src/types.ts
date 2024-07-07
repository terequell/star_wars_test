export type THuman = {
  name: string;
  height: string;
  birth_year: string;
  gender: string;
  url: string;
};

export type THumanDetails = THuman & {
  skin_color: string;
  eye_color: string;
};
