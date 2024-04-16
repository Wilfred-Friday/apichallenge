
import { join } from 'path';
const fs = require('fs');
const { expect } = require('@playwright/test');

class BaseMethods {
    static get(key) { // Get method to access an specific data stored on a variable inside the data.properties file.
        const propertiesPath = join(__dirname, '../testData/data.properties');
        try {
            const properties = fs.readFileSync(propertiesPath, 'utf8');
            const lines = properties.split('\n');
            const keyValuePairs = {};

            lines.forEach((line) => {
                if (line.includes('=')) {
                    const [k, v] = line.split('=');
                    keyValuePairs[k.trim()] = v.trim();
                }
            });

            return keyValuePairs[key];
        } catch (error) {
            console.error(`Error reading config.properties: ${error.message}`);
            return null;
        }
    }

    static set(key, value) { //Set method to add data to an specifici variable inside the data.properties file. 
        const propertiesPath = join(__dirname, '../testData/data.properties');
        try {
            const properties = fs.readFileSync(propertiesPath, 'utf8');
            let updatedProperties = ''; 
            const lines = properties.split('\n');
            lines.forEach((line) => {
                if (line.includes('=')) {
                    const [k] = line.split('=');
                    if (k.trim() === key) {
                        updatedProperties += `${key}=${value}\n`;
                    } else {
                        updatedProperties += `${line}\n`;
                    }
                }
            });
            fs.writeFileSync(propertiesPath, updatedProperties, 'utf8');
        } catch (error) {
            console.error(`Error writing to config.properties: ${error.message}`);
        }
    }

    static assertBookingData(responseData, bookingData) {  // Method to Verify the deep equality of the booking data in the response
    expect(responseData.booking).toEqual({
        firstname: bookingData.firstname,
        lastname: bookingData.lastname,
        totalprice: bookingData.totalprice,
        depositpaid: bookingData.depositpaid,
        bookingdates: {
            checkin: bookingData.bookingdates.checkin,
            checkout: bookingData.bookingdates.checkout
        },
        additionalneeds: bookingData.additionalneeds
    });
}
}


export default BaseMethods;