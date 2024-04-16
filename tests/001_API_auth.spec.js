import {expect, test} from '@playwright/test';
//Post auth token test

const ApiClient = require('../utils/ApiClient').default;
const BaseMethods = require('../utils/BaseMethods').default;
const endpoints = require('../utils/config');
const token = require('../testData/tokenRequest.json');
const apiClient = new ApiClient();
let id;

    test('API post booking auth', async({}) => {
            const response = await apiClient.post(endpoints.auth, token);
            expect(response.status).toBe(200); //Validate response code
            expect(response.data).toHaveProperty("token"); //Validate token property
            id = response.data.token;
            BaseMethods.set('token',id);  //Set token on a resusable variable  
    })
