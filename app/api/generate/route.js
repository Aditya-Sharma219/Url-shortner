import clientPromise from "@/lib/mongodb";


export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("url-shortner");
    const collection = db.collection("urls");

    // check if the short url exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
        return Response.json({ success: false, error : true, message: 'Shorturl already exists', })
    }
    const result = await collection.insertOne({ 
        url: body.url, 
        shorturl: body.shorturl });

    return Response.json({ success: true, error : false,message: 'Url generated Successfully', })
  }