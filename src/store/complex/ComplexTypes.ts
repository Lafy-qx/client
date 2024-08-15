
export type complexType = {
  title: String,
  content: String,
  img: String,
  complexSwiper: String[],
  private : String,
  location: String,
  layout: String
}

export type ComplexState = {
  complexes: complexType[],
}
