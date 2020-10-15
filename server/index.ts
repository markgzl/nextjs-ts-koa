import next from 'next'
import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import allRoutes from './router'
// import db from './database'
import { HTTP_SUCCESS_CODE } from './const'

const port = parseInt((process as any).env.PORT, 10) || 7050;
const dev = process.env.NODE_ENV !== "production";

const APP = next({ dev, dir: './src' })

APP.prepare()
	.then(()=>{
		const server = new Koa()

		server.use(bodyparser())
		server.use(allRoutes(APP).routes())

		// 对于未捕获的路由全部交由next.js处理
		server.use(async (ctx) => {
			ctx.res.statusCode = HTTP_SUCCESS_CODE
			await APP.getRequestHandler()(ctx.req, ctx.res)
			ctx.respond = false
		});

		server.listen(port,()=>{
			console.log('success on port 3000')
		})
		server.on('error',(err)=>{
			console.log(err)
		})
	})
	.catch(err=>{
		console.error(err)
	})