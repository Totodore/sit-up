export interface LocationResponse {
  type: string
  version: string
  features: LocationFeature[]
  attribution: string
  licence: string
  query: string
  limit: number
}

export interface LocationFeature {
  type: string
  geometry: LocationGeometry
  properties: LocationProperties
}

export interface LocationGeometry {
  type: string
  coordinates: number[]
}

export interface LocationProperties {
  label: string
  score: number
  housenumber: string
  id: string
  type: string
  name: string
  postcode: string
  citycode: string
  x: number
  y: number
  city: string
  context: string
  importance: number
  street: string
}
