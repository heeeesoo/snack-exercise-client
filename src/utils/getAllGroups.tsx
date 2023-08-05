import TokenStore from "@/store/TokenStore";

export default async function getAllGroups() {
    console.log(TokenStore.getState().token)

    const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/groups`;

    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}