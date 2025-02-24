import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const shorturl = (await params).shorturl
    const client = await clientPromise
    const db = client.db("url-shortner")
    const collection = db.collection("urls")
    const doc = await collection.findOne({ shorturl: shorturl })
    
    if (doc) {
      return redirect(doc.url)
    }else{
      return redirect("/")
    }
    return <div>My Post: {url}</div>
  }
 