// Hit GET AND POST API AND GET RESPONSE BACK
export const Service = async (method, body, apiname) => {
    try {
        console.log(method, `https://jsonplaceholder.typicode.com/todos`)
        const requestOptions = {
            method:'GET',
            headers: { 'Content-Type': 'application/json' },
            // body:body===""?"":JSON.stringify(body)
        };
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, requestOptions);
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;   
    } 
 }