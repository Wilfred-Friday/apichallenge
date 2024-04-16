
class ApiClient { //All crud methods to be use on test files
    async get(url) { //Get request method
        try {
            const response = await fetch(url);
            const data = await response.json();
            return { status: response.status, data };
        } catch (error) {
            throw new Error(`GET request failed: ${error.message}`);
        }
    }

    async getId(url, id) { //Get request using id and url as parameters
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if(response.status == 404){
                return { status: response.status};
            }
            const data = await response.json();
            return { status: response.status, data };
        } catch (error) {
            throw new Error(`GET request failed: ${error.message}`);
        }
    }

    async post(url, body) { //Post method with url and body as parameters
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return { status: response.status, data };
        } catch (error) {
            throw new Error(`POST request failed: ${error.message}`);
        }
    }

    async put(url, id, body, cookie) { //Put method with url,id,body and cookie as parameters
        try {
            console.log('this is the url',url);
            console.log('this is the id ',id);
            const response = await fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Cookie': cookie,},
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return { status: response.status, data };
        } catch (error) {
            throw new Error(`PUT request failed: ${error.message}`);
        }
    }

    async delete(url, id, cookie) { //Delete method with url, id and cookie as parameters
        try {
            console.log(cookie);
            const response = await fetch(`${url}/${id}`, { method: 'DELETE', 
            headers: { 
                        'Cookie': cookie,}});
            return { status: response.status, response};
        } catch (error) {
            throw new Error(`DELETE request failed: ${error.message}`);
        }
    }
}

export default ApiClient;
