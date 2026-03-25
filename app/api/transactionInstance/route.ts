import clientPromise from "@/app/lib/mongodb"
import { getDateRange } from "@/app/utils/getDateRange"

export async function POST(req: Request) {
    const body = await req.json()

    const client = await clientPromise
    const db = client.db("balanceSheet")


    const result = await db.collection("transactions").insertOne({...body,
        createdAt:new Date(),
        lastEdited:new Date()})

    return Response.json({
        success: true,
        insertedId: result.insertedId,
    })
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  
  const range = searchParams.get("range")
  const from = searchParams.get("from")
  const to = searchParams.get("to")
  console.log(range)
  const client = await clientPromise
  const db = client.db("balanceSheet")

  let filter: any = {}

  // CASE 1: CUSTOM RANGE (HIGHEST PRIORITY)
  if (from && to) {
    filter.createdAt = {
      $gte: new Date(from),
      $lte: new Date(to),
    }
  }

  // CASE 2: PRESET RANGE
  else if (range) {
    const rangeResult = getDateRange(range)
    console.log(rangeResult)
    if (rangeResult?.start && rangeResult?.end) {
      filter.createdAt = {
        $gte: new Date(rangeResult.start),
        $lte: new Date(rangeResult.end),
      }
    }
  }

  const data = await db
    .collection("transactions")
    .find(filter)
    .toArray()
  // console.log(data)
  return Response.json({
    success: true,
    transactions: data,
  })
}

