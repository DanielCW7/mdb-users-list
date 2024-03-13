import axios from "axios"

export default async function getUsers() {
   try {
        const response = await axios.get("http://localhost:5000")
        const data = response.data
        console.log(response, data)
   } catch(err) {
        console.error(err)
   } finally {
    console.log("done fetching users")
   }
}
