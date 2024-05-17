import { Context, Next } from 'oak'

export default async function notFound(ctx: Context, next: Next) {
  await next()

  ctx.response.redirect('https://60s.coolsong.com')

  return
}
