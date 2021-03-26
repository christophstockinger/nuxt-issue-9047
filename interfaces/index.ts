export enum ChildrenRelationship {
  naturalChild = 0,
  fosterChild = 1,
  adoptedChild = 2,
  stepchild = 3,
}

export enum MaritalState {
  single = 0,
  married = 1,
  partnered = 2,
  divorced = 3,
  widowed = 4,
  permanentlySeparated = 5,
}

export enum PropertyState {
  communityOfGains = 0,
  communityOfProperty = 1,
  otherArrangement = 2,
}

export interface Children {
  firstname: string
  lastname: string
  taxIdentificationNumber: string
  dateOfBirth: Date
  relationship: ChildrenRelationship
}

export interface PersonalData {
  firstname: string
  lastname: string
  familyname: string
}

export interface AddressData {
  street: string
  zip: string
  city: string
}

export interface ContactData {
  phonenumber: string
  email: string
  emailInvoice?: string | null
}

export interface TaxData {
  identificationNumber: string
  registration: string
  number: string
}

export interface AdditonalInformations {
  job: string
  religion: string
  taxData: TaxData
}

export interface Relationship {
  maritalState: MaritalState
  since?: Date | null
  propertyState: PropertyState
}

export interface BankDetails {
  accountOwner: string
  creditInstitution: string
  iban: string
  bic: string
}

export interface Husband {
  personalData: PersonalData
  addressData: AddressData
  contactData: ContactData
  additonalInformations: AdditonalInformations
}

export interface Taxable {
  personalData: PersonalData
  addressData: AddressData
  contactData: ContactData
  additonalInformations: AdditonalInformations
  relationship: Relationship
  husband?: Husband
  bankDetails: BankDetails
  childrens: Children[]
  newsletter: boolean
  correctness: boolean
  dsgvo: boolean
  attorney: boolean
}
