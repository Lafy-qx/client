export type HOUSE_DATA = Partial<{
    nameComplex: String,
    complexID: String
}>

export type HOUSE_STATE = Partial<{
    curHouse?: HOUSE_DATA
    allHouse: HOUSE_DATA[]
}>