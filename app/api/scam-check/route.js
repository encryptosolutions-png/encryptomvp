export async function POST(req) {
  const body = await req.json()
  const message = body.message.toLowerCase()

  const highRisk = [
    "send money",
    "wire transfer",
    "crypto payment",
    "collaboration fee",
    "guaranteed profit"
  ]

  const mediumRisk = [
    "urgent",
    "limited offer",
    "verify account",
    "click this link",
    "investment opportunity"
  ]

  let matches = 0

  highRisk.forEach(word => {
    if (message.includes(word)) matches++
  })

  mediumRisk.forEach(word => {
    if (message.includes(word)) matches++
  })

  let result = "Safe"

  if (matches >= 3) result = "Scam"
  else if (matches >= 1) result = "Suspicious"

  return Response.json({ result })
}