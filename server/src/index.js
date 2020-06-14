/**
 * @flow
 */

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'
import router from './routes'
import { errorHandler } from './middleware'
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
)
const app = new Koa()

if (app.env === 'development') {
  app.proxy = true
}

app.use(errorHandler())
app.use(helmet())
app.use(bodyParser())
app.use(router)

export default app
