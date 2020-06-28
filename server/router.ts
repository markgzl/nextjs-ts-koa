import { Context } from 'koa'
import Router from 'koa-router'
import { HTTP_SUCCESS_CODE, SuccessProtocol } from './const'
import db from  './database'

const renderHtml = async (APP: any, ctx: Context, pagePath: string) => {
	ctx.res.statusCode = HTTP_SUCCESS_CODE
	await APP.render(ctx.req, ctx.res, pagePath, ctx.query)
	ctx.respond = false
}

const allRoutes = (app: any): Router => {
	const router = new Router()
	router.get('/',async ctx => renderHtml(app, ctx, '/index')	)
	router.get('/a', async ctx =>	renderHtml(app, ctx, '/a') )

	router.get('/api/news/:pageNo/:pageSize', async (ctx: Context) => {
		const { pageNo, pageSize } = ctx.params
		console.info(pageNo, pageSize)
		const data = await db.query(pageNo, pageSize)
		// ctx.res['data']=data
		// console.log(data,'----')
		ctx.body =  new SuccessProtocol(data)
		// ctx.respond = false

	})
	router.get('/b', ctx => renderHtml(app, ctx, '/news/detail'))

	return router
}

export default allRoutes