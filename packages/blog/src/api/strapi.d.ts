type StrapiDataItem<T> = {
  id: number
  attributes: T
}

type StrapiData<T> = {
  data: StrapiDataItem<T>
}

type StrapiMultipleData<T> = {
  data: StrapiDataItem<T>[]
}

type StrapiMeta = {
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

type StrapiResponse<T> = StrapiMultipleData<T> & StrapiMeta