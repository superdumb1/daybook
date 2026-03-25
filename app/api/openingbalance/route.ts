import clientPromise from "@/app/lib/mongodb"

export const POST = async (req: any) => {
  const body = await req.json()
  const { openingBalence } = body
  const client = await clientPromise
  const db = client.db("balenceSheet")
  const dateKey = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kathmandu"
  }).format(new Date())

  const DayInstance = {
    createdAt: new Date(),
    dateKey: dateKey,
    openingBalence: openingBalence
  }
  const result = await db.collection("day_instances").insertOne(
    DayInstance
  )
  return Response.json({
    success: true,
    insertedId: result.insertedId,
  })
}

export const GET = async () => {
  const db = (await clientPromise).db("balenceSheet")
  const dateKey = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kathmandu"
  }).format(new Date())
  const result= await db.collection("day_instances").findOne({ dateKey: dateKey })
  if(result){

    return Response.json({
      success:true,
      result:result
    });
  }
  else return Response.json({success:false})
}