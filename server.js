const express = require('express');
const app = express();
require('dotenv').config();
const { CreateEmailTemplateCommand,UpdateEmailTemplateCommand,SESv2Client } = require('@aws-sdk/client-sesv2');
const {constantTemplates, constantDevTemplates } = require('./constantTemplates');

// create client
const client = new SESv2Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY
    }
})


const createEmailTemplate = async (templatesData) => {
    try {

        for (let i = 0; i < templatesData.length; i++) {
            
            const createEmailTemplates = new CreateEmailTemplateCommand({
                TemplateName: templatesData[i].templateName,
                TemplateContent: {
                    Html: templatesData[i].htmlBody,
                    Subject: templatesData[i].subject
                }
            })
            const createEmailResp = await client.send(createEmailTemplates);
            console.log("Email Created Successfuly", createEmailResp);
        }

    } catch (error) {
        console.log("email template creation failed", error);
    }
};
// createEmailTemplate(constantTemplates);
createEmailTemplate(constantDevTemplates);


// update email template:
const updateEmailTemplate = async (templatesData) => {
    try {

        for (let i = 0; i < templatesData.length; i++) {
        //    console.log(templatesData[i]);
            const updateEmailTemplates = new UpdateEmailTemplateCommand({
                TemplateName: templatesData[i].templateName,
                TemplateContent: {
                    Html: templatesData[i].htmlBody,
                    Subject: templatesData[i].subject
                }
            })

        const updateResponse = await client.send(updateEmailTemplates);
        console.log("Email updated Successfully!", updateResponse);
    }
    } catch (error) {
        console.log("update Email is failed:", error);
    }

}
// updateEmailTemplate(constantTemplates)
// updateEmailTemplate(constantDevTemplates)

app.listen('8000', () => {
    console.log("Srever Running!");
})