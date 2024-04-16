import {expect, test} from '@playwright/test';
//Create a booking test

const ApiClient = require('../utils/ApiClient').default;
const BaseMethods = require('../utils/BaseMethods').default;
const endpoints = require('../utils/config');
const bookingData = require('../testData/bookingData.json');
const apiClient = new ApiClient();
let id;

    test('API post booking', async({}) => {
            const response = await apiClient.post(endpoints.baseUrl, bookingData);
            expect(response.status).toBe(200); //validate reponse code
            expect(response.data).toHaveProperty("bookingid"); //Validate the existance of the booking id
            BaseMethods.assertBookingData(response.data,bookingData); //validate the equality of the response data
            id = response.data.bookingid;
            BaseMethods.set('bookingId',id);  //Store the id on a reusable variable  
    })

    
   
   
    

    


 