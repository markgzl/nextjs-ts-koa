import { Context } from 'koa'
import Router from 'koa-router'
import { HTTP_SUCCESS_CODE } from './const'
// import db from  './database'

const renderHtml = async (APP: any, ctx: Context, pagePath: string, params?: object) => {
	ctx.res.statusCode = HTTP_SUCCESS_CODE
	await APP.render(ctx.req, ctx.res, pagePath, {...ctx.query, ...params})
	ctx.respond = false
}

const allRoutes = (app: any): Router => {
	const router = new Router()
	router.get('/',async (ctx: Context) => renderHtml(app, ctx, '/index', {id: 10000})	)
	router.get('/news', async (ctx: Context) => renderHtml(app, ctx, '/news') )
	router.get('/product', async (ctx: Context) =>	renderHtml(app, ctx, '/product') )
	router.get('/aboutus', async (ctx: Context) =>	renderHtml(app, ctx, '/aboutUs') )
	router.get('news/:id', async (ctx: Context) =>	renderHtml(app, ctx, '/newsDetail'))

	// router.get('/api/news/:pageNo/:pageSize', async (ctx: Context) => {
	// 	const { pageNo, pageSize } = ctx.params
	// 	const data = await db.queryNewsList(pageNo, pageSize)
	// 	ctx.body =  new SuccessProtocol(data)
	// })
	// router.get('/api/news/:id', async (ctx: Context) => {
	// 	const { id } = ctx.params
	// 	const data = await db.queryById(id)
	// 	ctx.body =  new SuccessProtocol(data)
	// })

	return router
}

export default allRoutes