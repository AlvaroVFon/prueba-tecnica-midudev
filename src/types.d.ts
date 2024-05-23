export interface User {
  gender: Gender
  name: UserName
  location: Location
  email: string
  login: Login
  dob: Dob
  registered: Registered
  phone: string
  cell: string
  id: ID
  picture: Picture
  nat: string
}
export type Gender = 'Male' | 'Female'
export interface UserName {
  title: Title
  first: string
  last: string
}
export type Title = 'Mr' | 'Mrs' | 'Ms'
export interface Location {
  street: Street
  city: string
  state: string
  country: string
  coordinates: Coordinates
  timezone: Timezone
}
export interface Street {
  number: number
  name: string
}
export interface Coordinates {
  latitude: number
  longitude: number
}
export interface Timezone {
  offset: string
  description: string
}
export interface Login {
  uuid: `${string}-${string}-${string}-${string}-${string}`
  username: string
  password: string
  salt: string
  md5: string
  sha: string
  sha256: string
}
export interface Dob {
  date: Date
  age: 54
}
export interface Registered {
  date: Date
  age: number
}
export interface ID {
  name: string
  value: string
}
export interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface Info {
  seed: string
  results: number
  page: number
  version: string
}

export interface APIResults {
  results: User[]
  info: Info
}
