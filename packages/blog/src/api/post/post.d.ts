/* eslint-disable @typescript-eslint/naming-convention */
type PostResponseEntity = {
  title: string
  summary: string
  content: string
  locale: AppLocales
  imgUrl?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  categories?: StrapiMultipleData<CategoryResponseEntity>
  coverImage?: StrapiData<MediaResponseEntity>
  coverImageAuthor: string | null
  coverImageSourceUrl: string | null
  localizations?: StrapiMultipleData<PostResponseEntity>
  writer?: StrapiData<WriterResponseEntity>
}

type PostResponse = StrapiResponse<PostResponseEntity>
type PostSingleResponse = StrapiSingleResponse<PostResponseEntity>

type Post = {
  id: number
  title: string
  summary: string
  imgUrl?: string
  publishedAt: string
  categories: Category[] | null
  content: import('editorjs-blocks-react-renderer').DataProp
  createdAt?: string
  updatedAt?: string
  coverImage: Media | null
  coverImageAuthor: string | null
  coverImageSourceUrl: string | null
  localizations: Post[] | null
  locale: AppLocales
  writer: Writer | null
}

type AlgoliaPost = {
  title: string
  summary: string
  content: string
  createdAt: string
  publishedAt: string
  locale: string
  imgUrl: string | null
  coverImageSourceUrl: string | null
  categories: CategoryResponseEntity[]
  writer: WriterResponseEntity
  coverImage: MediaResponseEntity
}
