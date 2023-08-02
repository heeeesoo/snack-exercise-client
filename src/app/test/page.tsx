'use client'
import { useEffect, useState } from "react";


const Test = () => {
    const [stringData, setStringData] = useState('');

    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/health`;
    
        // Create an async function to fetch the data
        const fetchData = async () => {
          try {
            // Make the GET request using Fetch API
            const response = await fetch(apiUrl);
    
            // Check if the request was successful (status code 2xx)
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            // Parse the response body as text (string)
            const data = await response.text();
    
            // Update the state with the received string
            setStringData(data);
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