// Write your code here
import {
  NotfoundContainer,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <NotfoundContainer>
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Lost Your Way?</NotFoundHeading>
      <NotFoundDescription>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </NotFoundDescription>
    </NotfoundContainer>
  </>
)

export default NotFound
