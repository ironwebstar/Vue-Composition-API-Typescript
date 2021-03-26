/* eslint-disable camelcase */
export interface Category {
  code: string
  cover_image_url: string
  event_image_url: string
  id: number
  level: string
  name: string
  url: string
}

export interface Country {
  id: number
  iso_code: string
  name: string
}

export interface City {
  country: Country
  cover_image_url: string
  id: number
  name: string
  time_zone: string
  url: string
}

export interface Feature {
  code: string
  name: string
}

export interface Service {
  code: string
  namee: string
}

export interface Vertical {
  active: boolean
  code: string
  cover_image_url: string
  id: number
  meta_description: string
  meta_title: string
  name: string
  relevance: number
  slug: string
  url: string
}

export interface Flavour {
  active: boolean
  id: number
  name: string
  slug: string
}

export interface Price {
  currency: string
  formatted_iso_value: string
  formatted_value: string
  value: number
}

export interface ProductType {
  about: string
  best_price: boolean
  booking_type: string
  buy_multiplier: number
  categories: Category[]
  city: City[]
  cover_image_url: string
  cutoff_time: string
  daily: boolean
  description: string
  discount: number
  duration: string
  duration_range: object
  exclusive: boolean
  features: Feature[]
  flavours: Flavour[]
  food: string[]
  free_cancellation: boolean
  giftable: boolean
  group_size: object[]
  has_extra_customer_data: boolean
  has_price_info_on_date: boolean
  has_passenger_info: boolean
  highlights: string[]
  included: string[]
  is_available_today: boolean
  is_available_tomorrow: boolean
  languages: object[]
  last_chance: boolean
  latitude: number
  longitude: number
  max_confirmation_time: string
  metting_point: string
  must_see: boolean
  not_included: string[]
  open: boolean
  operational_days: string
  original_retail_price: Price
  original_retail_price_without_service_fee: Price
  relevance: number
  relevance_venue: number
  retail_price: Price
  retail_price_without_service_fee: Price
  reviews_aggregated_info: object
  reviews_avg: number
  reviews_number: number
  saves: number
  service_fee: Price
  services: Service[]
  special_offer: boolean
  temporary: boolean
  ticket: boolean
  ticket_not_included: boolean
  title: string
  top_seller: boolean
  url: string
  uuid: string
  validity: string
  verticals: Vertical[]
  voucher_access_usage: string
}

export interface getProductParamType {
  venueId: number
  vertical?: number
  city?: number
  category?: number
  date_from?: Date
  date_to?: Date
  offset?: number
  limit?: number
  flavour?: number
  sort_by?: string
}
