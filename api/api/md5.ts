import type { VercelRequest, VercelResponse } from '@vercel/node'
import crypto from 'crypto'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const text = req.query.text as string
  if (!text) {
    return res.status(400).json({ error: 'Missing text parameter' })
  }
  const hash = crypto.createHash('md5').update(text).digest('hex')
  res.status(200).json({ md5: hash })
}
