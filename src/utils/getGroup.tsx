interface DataType {
    id: number;
  }
  
  interface CustomResponse<T> {
    success: boolean;
    data: T;
  }
  
  export default async function getGroup() {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
    const apiUrl = `${SERVER_URL}/api/exgroups/2`;
  
    const response: CustomResponse<DataType> = await fetch(apiUrl).then((res) => res.json());
    console.log(response);
    if (!response.success) {
      throw new Error('Failed to submit form data');
    }
    console.log(response);
    return response;
}
  