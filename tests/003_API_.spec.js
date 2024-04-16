import {expect, test} from '@playwright/test';
//Search for a booking test
const ApiClient = require('../utils/ApiClient').default;
const BaseMethods = require('../utils/BaseMethods').default;
const endpoints = require('../utils/config');
const bookingData = require('../testData/bookingData.json');
const apiClient = new ApiClient();
let id = BaseMethods.get('bookingId');
let url = endpoints.baseUrl;


    test('API Get Booking with Id', async({}) => {
        const response = await apiClient.getId(url, id); 
        expect(response.status).toBe(200); //Validate the response code
        expect(response.data).toEqual(bookingData); //validate the equality of the response data
})

