import fetchJson from '../../lib/fetchJson'
import withSession from '../../lib/session'

export default withSession(async (req, res) => {
  const { xPatsaId, xPatsaLogin,xPatsaPassword,xPatsaToken } = await req.body
  // const url = `https://api.github.com/users/${username}`

  console.log({xPatsaId, xPatsaLogin,xPatsaPassword,xPatsaToken })

  try {
    // // we check that the user exists on GitHub and store some data in session
    // const { login, avatar_url: avatarUrl } = await fetchJson(url)
    const user = { isLoggedIn: true, xPatsaId,xPatsaLogin, xPatsaPassword,xPatsaToken }
    req.session.set('user', user)
    await req.session.save()
    res.json(user)

  } catch (error) {
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error.data)
  }
})
