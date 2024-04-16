import {expect, test} from '@playwright/test';
//Delete booking id
const ApiClient = require('../utils/ApiClient').default;
const BaseMethods = require('../utils/BaseMethods').default;
const endpoints = require('../utils/config');
const apiClient = new ApiClient();
let cookie = `token=${BaseMethods.get('token')}`;
let id = BaseMethods.get('bookingId');
let url = endpoints.baseUrl;


    test('API Delete Booking with Id', async({}) => {
        const response = await apiClient.delete(url, id, cookie);
        expect(response.status).toBe(201); //Validating response code
})

test('API get confirm Booking with Id', async({}) => {
    const response = await apiClient.getId(url, id);
    expect(response.status).toBe(404); //Validating response code
    expect(response.body).toBeEmpty; //Validate response is empty
})

