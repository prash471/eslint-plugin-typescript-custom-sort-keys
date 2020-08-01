import { JSONSchema4 } from 'json-schema'

export enum SortingOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

export const sortingOrderOptionSchema: JSONSchema4 = {
  enum: [SortingOrder.Ascending, SortingOrder.Descending],
}

export type SortingOrderOption = SortingOrder

interface CaseSensitiveSortingOption {
  readonly caseSensitive: boolean
}

interface NaturalSortingOption {
  readonly natural: boolean
}

interface RequiredFirstSortingOption {
  readonly requiredFirst: boolean
}

interface DisplayFirstOption {
  readonly displayFirst: Array<string>
}

interface ShowFunctionsAtEndOption {
  readonly showFunctionsAtEnd: boolean
}

export interface SortingParamsOptions {
  readonly caseSensitive: CaseSensitiveSortingOption
  readonly natural: NaturalSortingOption
  readonly requiredFirst: RequiredFirstSortingOption
  readonly displayFirst: DisplayFirstOption
  readonly showFunctionsAtEnd: ShowFunctionsAtEndOption
}

export enum ErrorMessage {
  InterfaceInvalidOrder = 'Please fix the order by running eslint --fix',
  StringEnumInvalidOrder = 'Please fix the order by running eslint --fix'
}
