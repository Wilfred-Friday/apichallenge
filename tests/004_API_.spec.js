import {expect, test} from '@playwright/test';
//Update booking with id
const ApiClient = require('../utils/ApiClient').default;
const BaseMethods = require('../utils/BaseMethods').default;
const endpoints = require('../utils/config');
const bookingData = require('../testData/bookingData2.json');
const apiClient = new ApiClient();
let cookie = `token=${BaseMethods.get('token')}`;
let id = BaseMethods.get('bookingId');
let url = endpoints.baseUrl;

test('API PUT Boopking', async({}) => { 
    console.log(cookie)
    const response = await apiClient.put(url, id, bookingData, cookie);
    expect(response.status).toBe(200); //Validating response code
    
})

test('API get booking', async({}) =>{
    const response = await apiClient.getId(url,id);
    expect(response.status).toBe(200); //Validating response code
    expect(response.data).toEqual(bookingData); //Validating reponse equality and update
} )

