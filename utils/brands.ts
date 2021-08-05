const topBrandsList = [
  "clinique",
  "covergirl",
  "dior",
  "l'oreal",
  "maybelline",
  "revlon",
];

const brandsList = [
  ...topBrandsList,
  "almay",
  "alva",
  "anna sui",
  "annabelle",
  "benefit",
  "boosh",
  "burt's bees",
  "butter london",
  "c'est moi",
  "cargo cosmetics",
  "china glaze",
  "coastal classic creation",
  "colourpop",
  "dalish",
  "deciem",
  "dr. hauschka",
  "e.l.f.",
  "essie",
  "fenty",
  "glossier",
  "green people",
  "iman",
  "lotus cosmetics usa",
  "maia's mineral galaxy",
  "marcelle",
  "marienatie",
  "milani",
  "mineral fusion",
  "misa",
  "mistura",
  "moov",
  "nudus",
  "nyx",
  "orly",
  "pacifica",
  "penny lane organics",
  "physicians formula",
  "piggy paint",
  "pure anada",
  "rejuva minerals",
  "sally b's skin yummies",
  "salon perfect",
  "sante",
  "sinful colours",
  "smashbox",
  "stila",
  "suncoat",
  "w3llpeople",
  "wet n wild",
  "zorah",
  "zorah biocosmetiques",
];

export function brandExists(brand: string): boolean {
  return !!brandsList.find((name) => name === brand);
}

type callbackfn<T> = (value: string, index: number, array: string[]) => T;

export function mapBrands<T>(iterator: callbackfn<T>): T[] {
  return brandsList.map(iterator);
}

export function mapTopBrands<T>(iterator: callbackfn<T>): T[] {
  return topBrandsList.map(iterator);
}
