// // next.config.js
// module.exports = {
//     async headers() {
//       return [
//         {
//           // matching all API routes
//           source: "/api/:path*",
//           headers: [
//             { key: "Access-Control-Allow-Credentials", value: "true" },
//             { key: "Access-Control-Allow-Origin", value: "*" },
//             { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//             { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//           ]
//         }
//       ]
//     }
//   };
  
const allowCors = fn =&gt; async (req, res) =&gt; {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) =&gt; {
  const d = new Date()
  res.end(d.toString())
}

module.exports = allowCors(handler)
