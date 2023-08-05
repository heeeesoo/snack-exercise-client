import TokenStore from "@/store/TokenStore";

interface DataType {
    id: number;
  }
  
  interface CustomResponse<T> {
    success: boolean;
    data: T;
  }
  
  export default async function getGroup() {
    console.log(TokenStore.getState().token)
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
    const apiUrl = `https://jsonplaceholder.typicode.com/users`;
  
    const response: CustomResponse<DataType> = await fetch(apiUrl).then((res) => res.json());
    console.log(response);
    if (!response.success) {
      throw new Error('Failed to submit form data');
    }
    console.log(response);
    return response;
}
  