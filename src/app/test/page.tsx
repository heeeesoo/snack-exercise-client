'use client'
import { useEffect, useState } from "react";

import TokenStore from "@/store/TokenStore";
const Test = () => {
    const [stringData, setStringData] = useState('');
    const {token, setToken, setMemberId} = TokenStore();

    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/groups`;
    
        // Create an async function to fetch the data
        const fetchData = async () => {
          try {
            // Make the GET request using Fetch API
            const response: any = await fetch(apiUrl, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  "Accept": "application/json",

                  'Authorization': token
                  // 'Access-Control-Allow-Origin': 'https://dev-api.snackexercise.com'
              },
              // body: JSON.stringify(formDataToSend),
              // credentials: 'include',
          });
    
    
            // Parse the response body as text (string)
            if (!response.ok) {
              throw new Error('Failed to submit form data');
            }
      
            const responseData = await response.json();
            console.log('Server response:', responseData);
    
            // Update the state with the received string
            // setStringData(data);
          } catch (error) {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
          }
        };
    
        // Call the async function to fetch data when the component mounts
        fetchData();
      }, []);

    return (
        <div>
            test
            {stringData}
        </div>
    );
};

export default Test;