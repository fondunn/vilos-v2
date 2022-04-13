import defaultClient from './clients/default'
import { multiClientMiddleware } from "redux-axios-middleware";

const clients = {
  default: defaultClient
}

export default multiClientMiddleware(clients, {
  returnRejectedPromiseOnError: true,
})