const emailOtp = require("./Onboarding/emailOtp");
const accountSignup = require("./Onboarding/accountSignup");
const userSignup = require("./Onboarding/userSignup");
const usersSignupToAccountAdmin = require("./Onboarding/usersSignupToAccountAdmin");
const userSignupToVlsAdmin = require("./Onboarding/userSignupToVlsAdmin");
const makeAdminToUser = require("./VLS/makeAdminToUser");
const makeAdminToAccountAdmin = require("./VLS/makeAdminToAccountAdmin");
const convertToOwner = require("./VLS/convertToOwner");
const convertToOwnerToVLSAdmin = require("./VLS/convertToOwnerToVLSAdmin");
const convertToPartnerToAccountAdmins = require("./VLS/convertToPartnerToAccountAdmins");
const convertToPartnerToVlsAdmins = require("./VLS/convertToPartnerToVlsAdmins");
const appSubscriptionTemplateAccountAdmin = require("./VLS/appSubscriptionTemplateAccountAdmin");
const appSubscriptionTemplateVLSAdmin = require("./VLS/appSubscriptionTemplateVLSAdmin");
const defaultAppSubscription = require("./VLS/defaultAppSubscription");
const inviteUser = require("./VLS/inviteUser");
const assignSeatToUser = require("./VLS/assignSeatToUser");
const inviteUserToAccountAdmin = require("./VLS/inviteUserToAccountAdmin");
const appPriceSubimtToVLSAdmin = require("./VLS/appPriceSubimtToVLSAdmin");
const appPricingSubmitToAccountAdmin = require("./VLS/appPricingSubmitToAccountAdmin");
const appPricingApprovalToAccountAdmin = require("./VLS/appPricingApprovalToAccountAdmin");
const appPriceRejectedToAccountAdmin = require("./VLS/appPriceRejectedToAccountAdmin");
const stripeOnboardingLink = require("./VLS/stripeOnboardingLink");

// create and update templates in AWS SES:
const constantProdTemplates = [
    // {
    //     templateName: "1_getEmailOtp",
    //     subject: "Email Verification OTP",
    //     htmlBody: emailOtp
    // },
    // {
    //     templateName: "2_accountSignup",
    //     subject: "Account Signup Confirmation",
    //     htmlBody: accountSignup
    // },
    // {
    //     templateName: "3_defaultAppSubscription",
    //     subject: "Default App Subscription",
    //     htmlBody: defaultAppSubscription
    // },
    // {
    //     templateName: "4_inviteUser",
    //     subject: "Invite User",
    //     htmlBody: inviteUser
    // },
    // {
    //     templateName: "5_inviteUserToAccountAdmin",
    //     subject: "Invite User Confirmation",
    //     htmlBody: inviteUserToAccountAdmin
    // },
    // {
    //     templateName: "6_inviteUserSignupConfirmation",
    //     subject: "Invite User Signup",
    //     htmlBody: userSignup
    // },
    // {
    //     templateName: "7_inviteUserSignupConfirmationToAccountAdmin",
    //     subject: "Invite User Signup Confirmation To Account Admin",
    //     htmlBody: usersSignupToAccountAdmin
    // },
    // {
    //     templateName: "8_inviteUserSignupConfirmationToVLSAdmin",
    //     subject: "Invite User Signup Confirmation To Platform Admin",
    //     htmlBody: userSignupToVlsAdmin
    // },
    // {
    //     templateName: "9_assignUser",
    //     subject: "Assign User",
    //     htmlBody: assignSeatToUser
    // },
    // {
    //     templateName: "10_appSubscriptionFromAppStore",
    //     subject: "App Subscription",
    //     htmlBody: appSubscriptionTemplateAccountAdmin
    // },
    // {
    //     templateName: "11_appSubscriptionFromAppStore",
    //     subject: "App Subscription Confirmation",
    //     htmlBody: appSubscriptionTemplateVLSAdmin
    // },
    // {
    //     templateName: "12_makeAdmin",
    //     subject: "Make Admin Access",
    //     htmlBody: makeAdminToUser
    // },
    // {
    //     templateName: "13_makeAdminToAccountAdmin",
    //     subject: "Make Admin Access Confirmation",
    //     htmlBody: makeAdminToAccountAdmin
    // },
    // {
    //     templateName: "14_convertToOwner",
    //     subject: "Convert To Owner",
    //     htmlBody: convertToOwner
    // },
    // {
    //     templateName: "15_convertToOwnerToVLSAdmin",
    //     subject: "Convert To Owner Confirmation",
    //     htmlBody: convertToOwnerToVLSAdmin
    // },
    // {
    //     templateName: "16_convertToPartner",
    //     subject: "Convert To Partner",
    //     htmlBody: convertToPartnerToAccountAdmins
    // },
    // {
    //     templateName: "17_convertToPartnerToVLSAdmin",
    //     subject: "Convert To Partner Confirmation",
    //     htmlBody: convertToPartnerToVlsAdmins
    // },
    // {
    //     templateName: "18_appSubmitToPublish",
    //     subject: "App Submitted To Publish",
    //     htmlBody: appPricingSubmitToAccountAdmin
    // },  
    // {
    //     templateName: "19_appSubmitToPublishToVLSAdmin",
    //     subject: "App Submitted To Publish Confirmation",
    //     htmlBody: appPriceSubimtToVLSAdmin
    // },
    // {
    //     templateName: "20_appPublishedToAccountAdmin",
    //     subject: "App Published Successfully",
    //     htmlBody: appPricingApprovalToAccountAdmin
    // },
    // {
    //     templateName: "21_appRejectedToAccountAdmin",
    //     subject: "App Rejected",
    //     htmlBody: appPriceRejectedToAccountAdmin
    // },
    // {
    //     templateName: "22_stripeOnboarding",
    //     subject: "Stripe Onboarding Email",
    //     htmlBody: stripeOnboardingLink
    // },

]

const constantDevTemplates = [
    {
        templateName: "1_getEmailOtp_custom",
        subject: "Email Verification OTP",
        htmlBody: emailOtp
    },
    // {
    //     templateName: "2_accountSignup_custom",
    //     subject: "Account Signup Confirmation",
    //     htmlBody: accountSignup
    // },
    // {
    //     templateName: "3_defaultAppSubscription_custom",
    //     subject: "Default App Subscription",
    //     htmlBody: defaultAppSubscription
    // },
    // {
    //     templateName: "4_inviteUser_custom",
    //     subject: "Invite User",
    //     htmlBody: inviteUser
    // },
    // {
    //     templateName: "5_inviteUserToAccountAdmin_custom",
    //     subject: "Invite User Confirmation",
    //     htmlBody: inviteUserToAccountAdmin
    // },
    // {
    //     templateName: "6_inviteUserSignupConfirmation_custom",
    //     subject: "Invite User Signup",
    //     htmlBody: userSignup
    // },
    // {
    //     templateName: "7_inviteUserSignupConfirmationToAccountAdmin_custom",
    //     subject: "Invite User Signup Confirmation To Account Admin",
    //     htmlBody: usersSignupToAccountAdmin
    // },
    // {
    //     templateName: "8_inviteUserSignupConfirmationToVLSAdmin_custom",
    //     subject: "Invite User Signup Confirmation To Platform Admin",
    //     htmlBody: userSignupToVlsAdmin
    // },
    {
        templateName: "9_assignUser_custom",
        subject: "Assign User",
        htmlBody: assignSeatToUser
    },
    // {
    //     templateName: "10_appSubscriptionToAccountAdmin_custom",
    //     subject: "App Subscription",
    //     htmlBody: appSubscriptionTemplateAccountAdmin
    // },
    {
        templateName: "11_appSubscriptionToVlsAdmin_custom",
        subject: "App Subscription Confirmation",
        htmlBody: appSubscriptionTemplateVLSAdmin
    },
    // {
    //     templateName: "12_makeAdmin_custom",
    //     subject: "Make Admin Access",
    //     htmlBody: makeAdminToUser
    // },
    // {
    //     templateName: "13_makeAdminToAccountAdmin_custom",
    //     subject: "Make Admin Access Confirmation",
    //     htmlBody: makeAdminToAccountAdmin
    // },
    // {
    //     templateName: "14_convertToOwner_custom",
    //     subject: "Convert To Owner",
    //     htmlBody: convertToOwner
    // },
    // {
    //     templateName: "15_convertToOwnerToVLSAdmin_custom",
    //     subject: "Convert To Owner Confirmation",
    //     htmlBody: convertToOwnerToVLSAdmin
    // },
    {
        templateName: "16_convertToPartner_custom",
        subject: "Convert To Partner",
        htmlBody: convertToPartnerToAccountAdmins
    },
    {
        templateName: "17_convertToPartnerToVLSAdmin_custom",
        subject: "Convert To Partner Confirmation",
        htmlBody: convertToPartnerToVlsAdmins
    },
    // {
    //     templateName: "18_appSubmitToPublish_custom",
    //     subject: "App Submitted To Publish",
    //     htmlBody: appPricingSubmitToAccountAdmin
    // },  
    // {
    //     templateName: "19_appSubmitToPublishToVLSAdmin_custom",
    //     subject: "App Submitted To Publish Confirmation",
    //     htmlBody: appPriceSubimtToVLSAdmin
    // },
    // {
    //     templateName: "20_appPublishedToAccountAdmin_custom",
    //     subject: "App Published Successfully",
    //     htmlBody: appPricingApprovalToAccountAdmin
    // },
    // {
    //     templateName: "21_appRejectedToAccountAdmin_custom",
    //     subject: "App Rejected",
    //     htmlBody: appPriceRejectedToAccountAdmin
    // },
    // {
    //     templateName: "22_stripeOnboarding_custom",
    //     subject: "Stripe Onboarding Email",
    //     htmlBody: stripeOnboardingLink
    // },

]


module.exports = {constantProdTemplates , constantDevTemplates};