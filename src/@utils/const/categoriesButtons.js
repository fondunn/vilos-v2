import { useDispatch } from 'react-redux'
import { setPageType } from '@store/films/getFilmsSlice'

const dispatch = useDispatch()

const pageType = (type) => {
  dispatch(setPageType(type.toLoverCase()))
}
export const categoryBtn = [
  {
    title: 'Featured',
    onClickHandler: () => {
      console.log('btn Awaiting clicked')
      pageType(title)
    },
    active: true,
    link: 'last'
  },
  {
    title: 'Popular',
    onClickHandler: () => {
      console.log('btn Popular clicked')
      pageType(title)
    },
    active: false,
    link: 'popular'
  },
  {
    title: 'Upcoming',
    onClickHandler: () => {
      console.log('btn Awaiting clicked')
      pageType(title)
    },
    active: false,
    link: 'soon'
  }
]