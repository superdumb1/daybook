import clientPromise from "@/app/lib/mongodb"

export async function POST(req: Request) {
    const body = await req.json()
    console.log(body)
    
    const client = await clientPromise
    const db = client.db("testDB")
    const result = await db.collection("instances").insertOne(body)

    return Response.json({
        success: true,
        insertedId: result.insertedId,
    })
}