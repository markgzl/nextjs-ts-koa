import { Context } from 'koa'
import Router from 'koa-router'
import { HTTP_SUCCESS_CODE } from './const'

const renderHtml = async (APP: any, ctx: Context, pagePath: string) => {
	ctx.res.statusCode = HTTP_SUCCESS_CODE
	await APP.render(ctx.req, ctx.res, pagePath, ctx.query)
	ctx.respond = false
}

const allRoutes = (app: any): Router => {
	const router = new Router()
	router.get('/', ctx => renderHtml(app, ctx, '/index'))
	router.get('/a', ctx => renderHtml(app, ctx, '/a'))
	router.get('/b', ctx => renderHtml(app, ctx, '/news/detail'))

	return router
}

export default allRoutes