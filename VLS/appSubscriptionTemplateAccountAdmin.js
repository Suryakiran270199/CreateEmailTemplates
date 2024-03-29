module.exports = appSubscriptionToAccountAdmin = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
        <head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta charset="UTF-8" />
            <meta name="x-apple-disable-message-reformatting" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta content="telephone=no" name="format-detection" />
            <title>App subscription-V</title>
            <!--[if (mso 16)]>
                <style type="text/css">
                    a {
                        text-decoration: none;
                    }
                </style>
            <![endif]-->
            <!--[if gte mso 9]>
                <style>
                    sup {
                        font-size: 100% !important;
                    }
                </style>
            <![endif]-->
            <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                        <o:AllowPNG></o:AllowPNG>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
            <![endif]-->
            <style type="text/css">
                #outlook a {
                    padding: 0;
                }
                .es-button {
                    mso-style-priority: 100 !important;
                    text-decoration: none !important;
                }
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
                .es-desk-hidden {
                    display: none;
                    float: left;
                    overflow: hidden;
                    width: 0;
                    max-height: 0;
                    line-height: 0;
                    mso-hide: all;
                }
                @media only screen and (max-width: 600px) {
                    p,
                    ul li,
                    ol li,
                    a {
                        line-height: 150% !important;
                    }
                    h1,
                    h2,
                    h3,
                    h1 a,
                    h2 a,
                    h3 a {
                        line-height: 120% !important;
                    }
                    h1 {
                        font-size: 30px !important;
                        text-align: left;
                    }
                    h2 {
                        font-size: 24px !important;
                        text-align: left;
                    }
                    h3 {
                        font-size: 20px !important;
                        text-align: left;
                    }
                    .es-header-body h1 a,
                    .es-content-body h1 a,
                    .es-footer-body h1 a {
                        font-size: 30px !important;
                        text-align: left;
                    }
                    .es-header-body h2 a,
                    .es-content-body h2 a,
                    .es-footer-body h2 a {
                        font-size: 24px !important;
                        text-align: left;
                    }
                    .es-header-body h3 a,
                    .es-content-body h3 a,
                    .es-footer-body h3 a {
                        font-size: 20px !important;
                        text-align: left;
                    }
                    .es-menu td a {
                        font-size: 14px !important;
                    }
                    .es-header-body p,
                    .es-header-body ul li,
                    .es-header-body ol li,
                    .es-header-body a {
                        font-size: 14px !important;
                    }
                    .es-content-body p,
                    .es-content-body ul li,
                    .es-content-body ol li,
                    .es-content-body a {
                        font-size: 14px !important;
                    }
                    .es-footer-body p,
                    .es-footer-body ul li,
                    .es-footer-body ol li,
                    .es-footer-body a {
                        font-size: 14px !important;
                    }
                    .es-infoblock p,
                    .es-infoblock ul li,
                    .es-infoblock ol li,
                    .es-infoblock a {
                        font-size: 12px !important;
                    }
                    *[class="gmail-fix"] {
                        display: none !important;
                    }
                    .es-m-txt-c,
                    .es-m-txt-c h1,
                    .es-m-txt-c h2,
                    .es-m-txt-c h3 {
                        text-align: center !important;
                    }
                    .es-m-txt-r,
                    .es-m-txt-r h1,
                    .es-m-txt-r h2,
                    .es-m-txt-r h3 {
                        text-align: right !important;
                    }
                    .es-m-txt-l,
                    .es-m-txt-l h1,
                    .es-m-txt-l h2,
                    .es-m-txt-l h3 {
                        text-align: left !important;
                    }
                    .es-m-txt-r img,
                    .es-m-txt-c img,
                    .es-m-txt-l img {
                        display: inline !important;
                    }
                    .es-button-border {
                        display: inline-block !important;
                    }
                    a.es-button,
                    button.es-button {
                        font-size: 18px !important;
                        display: inline-block !important;
                    }
                    .es-adaptive table,
                    .es-left,
                    .es-right {
                        width: 100% !important;
                    }
                    .es-content table,
                    .es-header table,
                    .es-footer table,
                    .es-content,
                    .es-footer,
                    .es-header {
                        width: 100% !important;
                        max-width: 600px !important;
                    }
                    .es-adapt-td {
                        display: block !important;
                        width: 100% !important;
                    }
                    .adapt-img {
                        width: 100% !important;
                        height: auto !important;
                    }
                    .es-m-p0 {
                        padding: 0px !important;
                    }
                    .es-m-p0r {
                        padding-right: 0px !important;
                    }
                    .es-m-p0l {
                        padding-left: 0px !important;
                    }
                    .es-m-p0t {
                        padding-top: 0px !important;
                    }
                    .es-m-p0b {
                        padding-bottom: 0 !important;
                    }
                    .es-m-p20b {
                        padding-bottom: 20px !important;
                    }
                    .es-mobile-hidden,
                    .es-hidden {
                        display: none !important;
                    }
                    tr.es-desk-hidden,
                    td.es-desk-hidden,
                    table.es-desk-hidden {
                        width: auto !important;
                        overflow: visible !important;
                        float: none !important;
                        max-height: inherit !important;
                        line-height: inherit !important;
                    }
                    tr.es-desk-hidden {
                        display: table-row !important;
                    }
                    table.es-desk-hidden {
                        display: table !important;
                    }
                    td.es-desk-menu-hidden {
                        display: table-cell !important;
                    }
                    .es-menu td {
                        width: 1% !important;
                    }
                    table.es-table-not-adapt,
                    .esd-block-html table {
                        width: auto !important;
                    }
                    table.es-social {
                        display: inline-block !important;
                    }
                    table.es-social td {
                        display: inline-block !important;
                    }
                    .es-desk-hidden {
                        display: table-row !important;
                        width: auto !important;
                        overflow: visible !important;
                        max-height: inherit !important;
                    }
                }
                .platform-logo-container{
                    aspect-ratio:18/2;
                   }
                   
                   .platform-logo-container img {
                     width: 100%;
                     height: 100%;
                     object-fit: contain;
                   }
                   
            </style>
        </head>
        <body data-new-gr-c-s-loaded="14.1131.0" style="width: 100%; font-family: tahoma, verdana, segoe, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; padding: 0; margin: 0;">
            <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color: #f6f6f6;">
                <!--[if gte mso 9]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#f6f6f6"></v:fill>
                    </v:background>
                <![endif]-->
                <table
                    class="es-wrapper"
                    width="100%"
                    cellspacing="0"
                    cellpadding="0"
                    role="none"
                    style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        padding: 0;
                        margin: 0;
                        width: 100%;
                        height: 100%;
                        background-repeat: repeat;
                        background-position: center top;
                        background-color: #f6f6f6;
                    "
                >
                    <tr>
                        <td valign="top" style="padding: 0; margin: 0;">
                            <table
                                class="es-header"
                                cellspacing="0"
                                cellpadding="0"
                                align="center"
                                role="none"
                                style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                    table-layout: fixed !important;
                                    width: 100%;
                                    background-color: transparent;
                                    background-repeat: repeat;
                                    background-position: center top;
                                "
                            >
                                <tr>
                                    <td align="center" style="padding: 0; margin: 0;">
                                        <table
                                            class="es-header-body"
                                            cellspacing="0"
                                            cellpadding="0"
                                            bgcolor="#ffffff"
                                            align="center"
                                            role="none"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; background-color: #ffffff; width: 600px;"
                                        >
                                            <tr class="es-mobile-hidden">
                                                <td align="left" bgcolor="#F6F6F6" style="padding: 0; margin: 0; padding-top: 20px; padding-left: 20px; padding-right: 20px; background-color: #f6f6f6;">
                                                    <table cellspacing="0" cellpadding="0" width="100%" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                        <tr>
                                                            <td class="es-m-p0r" valign="top" align="center" style="padding: 0; margin: 0; width: 560px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                    <tr>
                                                                        <td align="left" style="padding: 0; margin: 0;">
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    -webkit-text-size-adjust: none;
                                                                                    -ms-text-size-adjust: none;
                                                                                    mso-line-height-rule: exactly;
                                                                                    font-family: tahoma, verdana, segoe, sans-serif;
                                                                                    line-height: 21px;
                                                                                    color: #333333;
                                                                                    font-size: 14px;
                                                                                "
                                                                            >
                                                                                <br />
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <table
                                class="es-content"
                                cellspacing="0"
                                cellpadding="0"
                                align="center"
                                role="none"
                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; table-layout: fixed !important; width: 100%;"
                            >
                                <tr>
                                    <td align="center" style="padding: 0; margin: 0;">
                                        <table
                                            class="es-content-body"
                                            cellspacing="0"
                                            cellpadding="0"
                                            bgcolor="#ffffff"
                                            align="center"
                                            role="none"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; background-color: #ffffff; width: 600px;"
                                        >
                                            <tr>
                                                <td align="left" style="padding: 0; margin: 0; padding-top: 20px; padding-left: 20px; padding-right: 20px;">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                        <tr>
                                                            <td align="center" valign="top" style="padding: 0; margin: 0; width: 560px;">
                                                                <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                    <tr>
                                                                        <td align="center" style="padding: 0; margin: 0; font-size: 0px;">
                                                                        <div class="platform-logo-container" >
                                                                        <a
                                                                        target="_blank"
                                                                        href={{platformURL}}
                                                                        style="-webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; text-decoration: underline; color: #022b3a; font-size: 14px;"
                                                                    >
                                                                            <img
                                                                                src={{platformLogo}}
                                                                                alt
                                                                                style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;
                                                                                width:250px; height: 90px;object-fit: contain;"
                                                                                />
                                                                            </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="padding: 0; margin: 0; padding-top: 20px; padding-left: 20px; padding-right: 20px;">
                                                    <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                        <tr>
                                                            <td align="center" valign="top" style="padding: 0; margin: 0; width: 560px;">
                                                                <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                    <tr>
                                                                        <td align="center" style="padding: 0; margin: 0; font-size: 0px;">
                                                                            <img
                                                                                src={{templateLogo}}
                                                                                alt
                                                                                style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;"
                                                                                width="220"
                                                                                height="220"
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="margin: 0; padding-top: 5px; padding-bottom: 5px; padding-left: 20px; padding-right: 20px;">
                                                    <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                        <tr>
                                                            <td valign="top" align="center" style="padding: 0; margin: 0; width: 560px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                    <tr>
                                                                        <td align="left" style="padding: 5px; margin: 0;">
                                                                            <h2
                                                                                style="
                                                                                    margin: 0;
                                                                                    line-height: 29px;
                                                                                    mso-line-height-rule: exactly;
                                                                                    font-family: tahoma, verdana, segoe, sans-serif;
                                                                                    font-size: 24px;
                                                                                    font-style: normal;
                                                                                    font-weight: normal;
                                                                                    color: #333333;
                                                                                    text-align: center;
                                                                                "
                                                                            >
                                                                                You have subscribed to {{appName}} app
                                                                            </h2>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="margin: 0; padding-top: 5px; padding-bottom: 5px; padding-left: 20px; padding-right: 20px;">
                                                    <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                        <tr>
                                                            <td valign="top" align="center" style="padding: 0; margin: 0; width: 560px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                    <tr>
                                                                        <td align="left" style="margin: 0; padding-top: 5px; padding-bottom: 5px; padding-right: 5px; padding-left: 20px;">
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    -webkit-text-size-adjust: none;
                                                                                    -ms-text-size-adjust: none;
                                                                                    mso-line-height-rule: exactly;
                                                                                    font-family: tahoma, verdana, segoe, sans-serif;
                                                                                    line-height: 23px;
                                                                                    color: #333333;
                                                                                    font-size: 15px;
                                                                                    text-align: left;
                                                                                "
                                                                            >
                                                                                Dear Account Admin,
                                                                            </p>
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    -webkit-text-size-adjust: none;
                                                                                    -ms-text-size-adjust: none;
                                                                                    mso-line-height-rule: exactly;
                                                                                    font-family: tahoma, verdana, segoe, sans-serif;
                                                                                    line-height: 23px;
                                                                                    color: #333333;
                                                                                    font-size: 15px;
                                                                                "
                                                                            >
                                                                                This email confirms your subscription purchase
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    class="esdev-adapt-off"
                                                    align="left"
                                                    bgcolor="#ffffff"
                                                    style="padding: 0; margin: 0; padding-top: 5px; padding-left: 20px; padding-right: 20px; background-color: #ffffff; border-radius: 5px 5px 0px 0px;"
                                                >
                                                    <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; width: 560px;">
                                                        <tr>
                                                            <td class="esdev-mso-td" valign="top" style="padding: 0; margin: 0;">
                                                                <table
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    class="es-left"
                                                                    align="left"
                                                                    role="none"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: left;"
                                                                >
                                                                    <tr>
                                                                        <td align="left" style="padding: 0; margin: 0; width: 270px;">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                width="100%"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;"
                                                                            >
                                                                                <tr>
                                                                                    <td align="right" style="padding: 0; margin: 0;">
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                -webkit-text-size-adjust: none;
                                                                                                -ms-text-size-adjust: none;
                                                                                                mso-line-height-rule: exactly;
                                                                                                font-family: tahoma, verdana, segoe, sans-serif;
                                                                                                line-height: 23px;
                                                                                                color: #333333;
                                                                                                font-size: 15px;
                                                                                            "
                                                                                        >
                                                                                            <strong>Tier Name</strong>
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td style="padding: 0; margin: 0; width: 20px;"></td>
                                                            <td class="esdev-mso-td" valign="top" style="padding: 0; margin: 0;">
                                                                <table
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    class="es-right"
                                                                    align="right"
                                                                    role="none"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: right;"
                                                                >
                                                                    <tr>
                                                                        <td align="left" style="padding: 0; margin: 0; width: 270px;">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                width="100%"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;"
                                                                            >
                                                                                <tr>
                                                                                    <td align="left" style="padding: 0; margin: 0;">
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                -webkit-text-size-adjust: none;
                                                                                                -ms-text-size-adjust: none;
                                                                                                mso-line-height-rule: exactly;
                                                                                                font-family: tahoma, verdana, segoe, sans-serif;
                                                                                                line-height: 23px;
                                                                                                color: #333333;
                                                                                                font-size: 15px;
                                                                                            "
                                                                                        >
                                                                                            {{tierName}}
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="esdev-adapt-off" align="left" bgcolor="#ffffff" style="padding: 0; margin: 0; padding-top: 5px; padding-left: 20px; padding-right: 20px; background-color: #ffffff;">
                                                    <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; width: 560px;">
                                                        <tr>
                                                            <td class="esdev-mso-td" valign="top" style="padding: 0; margin: 0;">
                                                                <table
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    class="es-left"
                                                                    align="left"
                                                                    role="none"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: left;"
                                                                >
                                                                    <tr>
                                                                        <td align="left" style="padding: 0; margin: 0; width: 270px;">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                width="100%"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;"
                                                                            >
                                                                                <tr>
                                                                                    <td align="right" style="padding: 0; margin: 0;">
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                -webkit-text-size-adjust: none;
                                                                                                -ms-text-size-adjust: none;
                                                                                                mso-line-height-rule: exactly;
                                                                                                font-family: tahoma, verdana, segoe, sans-serif;
                                                                                                line-height: 23px;
                                                                                                color: #333333;
                                                                                                font-size: 14px;
                                                                                            "
                                                                                        >
                                                                                            <strong><span style="font-size: 15px;"></span>No.of Seats</strong>
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td style="padding: 0; margin: 0; width: 20px;"></td>
                                                            <td class="esdev-mso-td" valign="top" style="padding: 0; margin: 0;">
                                                                <table
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    class="es-right"
                                                                    align="right"
                                                                    role="none"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: right;"
                                                                >
                                                                    <tr>
                                                                        <td align="left" style="padding: 0; margin: 0; width: 270px;">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                width="100%"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;"
                                                                            >
                                                                                <tr>
                                                                                    <td align="left" style="padding: 0; margin: 0;">
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                -webkit-text-size-adjust: none;
                                                                                                -ms-text-size-adjust: none;
                                                                                                mso-line-height-rule: exactly;
                                                                                                font-family: tahoma, verdana, segoe, sans-serif;
                                                                                                line-height: 23px;
                                                                                                color: #333333;
                                                                                                font-size: 15px;
                                                                                            "
                                                                                        >
                                                                                            {{noOfSeats}}
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="esdev-adapt-off" align="left" bgcolor="#ffffff" style="padding: 0; margin: 0; padding-top: 5px; padding-left: 20px; padding-right: 20px; background-color: #ffffff;">
                                                    <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; width: 560px;">
                                                        <tr>
                                                            <td class="esdev-mso-td" valign="top" style="padding: 0; margin: 0;">
                                                                <table
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    class="es-left"
                                                                    align="left"
                                                                    role="none"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: left;"
                                                                >
                                                                    <tr>
                                                                        <td align="left" style="padding: 0; margin: 0; width: 270px;">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                width="100%"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;"
                                                                            >
                                                                                <tr>
                                                                                    <td align="right" style="padding: 0; margin: 0;">
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                -webkit-text-size-adjust: none;
                                                                                                -ms-text-size-adjust: none;
                                                                                                mso-line-height-rule: exactly;
                                                                                                font-family: tahoma, verdana, segoe, sans-serif;
                                                                                                line-height: 23px;
                                                                                                color: #333333;
                                                                                                font-size: 15px;
                                                                                            "
                                                                                        >
                                                                                            <strong>Trial Period</strong>
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td style="padding: 0; margin: 0; width: 20px;"></td>
                                                            <td class="esdev-mso-td" valign="top" style="padding: 0; margin: 0;">
                                                                <table
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    class="es-right"
                                                                    align="right"
                                                                    role="none"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: right;"
                                                                >
                                                                    <tr>
                                                                        <td align="left" style="padding: 0; margin: 0; width: 270px;">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                width="100%"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;"
                                                                            >
                                                                                <tr>
                                                                                    <td align="left" style="padding: 0; margin: 0;">
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                -webkit-text-size-adjust: none;
                                                                                                -ms-text-size-adjust: none;
                                                                                                mso-line-height-rule: exactly;
                                                                                                font-family: tahoma, verdana, segoe, sans-serif;
                                                                                                line-height: 23px;
                                                                                                color: #333333;
                                                                                                font-size: 15px;
                                                                                            "
                                                                                        >
                                                                                            {{trialPeriod}}
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    class="esdev-adapt-off"
                                                    align="left"
                                                    bgcolor="#ffffff"
                                                    style="padding: 0; margin: 0; padding-top: 5px; padding-left: 20px; padding-right: 20px; background-color: #ffffff; border-radius: 0px 0px 5px 5px;"
                                                >
                                                    <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; width: 560px;">
                                                        <tr>
                                                            <td class="esdev-mso-td" valign="top" style="padding: 0; margin: 0;">
                                                                <table
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    class="es-left"
                                                                    align="left"
                                                                    role="none"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: left;"
                                                                >
                                                                    <tr>
                                                                        <td align="left" style="padding: 0; margin: 0; width: 270px;">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                width="100%"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;"
                                                                            >
                                                                                <tr>
                                                                                    <td align="right" style="padding: 0; margin: 0;">
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                -webkit-text-size-adjust: none;
                                                                                                -ms-text-size-adjust: none;
                                                                                                mso-line-height-rule: exactly;
                                                                                                font-family: tahoma, verdana, segoe, sans-serif;
                                                                                                line-height: 23px;
                                                                                                color: #333333;
                                                                                                font-size: 15px;
                                                                                            "
                                                                                        >
                                                                                            <strong>Subscription Price</strong>
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            <td style="padding: 0; margin: 0; width: 20px;"></td>
                                                            <td class="esdev-mso-td" valign="top" style="padding: 0; margin: 0;">
                                                                <table
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    class="es-right"
                                                                    align="right"
                                                                    role="none"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; float: right;"
                                                                >
                                                                    <tr>
                                                                        <td align="left" style="padding: 0; margin: 0; width: 270px;">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                width="100%"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;"
                                                                            >
                                                                                <tr>
                                                                                    <td align="left" style="padding: 0; margin: 0;">
                                                                                        <p
                                                                                            style="
                                                                                                margin: 0;
                                                                                                -webkit-text-size-adjust: none;
                                                                                                -ms-text-size-adjust: none;
                                                                                                mso-line-height-rule: exactly;
                                                                                                font-family: tahoma, verdana, segoe, sans-serif;
                                                                                                line-height: 23px;
                                                                                                color: #333333;
                                                                                                font-size: 15px;
                                                                                            "
                                                                                        >
                                                                                            {{subscriptionPrice}}
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 20px; border-radius: 5px;">
                                                    <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                        <tr>
                                                            <td valign="top" align="center" style="padding: 0; margin: 0; width: 560px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                    <tr>
                                                                        <td align="center" style="padding: 5px; margin: 0;">
                                                                            <!--[if mso]>
                                                                                <a href={{loginLink}} target="_blank" hidden>
                                                                                    <v:roundrect
                                                                                        xmlns:v="urn:schemas-microsoft-com:vml"
                                                                                        xmlns:w="urn:schemas-microsoft-com:office:word"
                                                                                        esdevVmlButton
                                                                                        href={{loginLink}}
                                                                                        style="height: 39px; v-text-anchor: middle; width: 235px;"
                                                                                        arcsize="23%"
                                                                                        stroke="f"
                                                                                        fillcolor="#2e77f2"
                                                                                    >
                                                                                        <w:anchorlock></w:anchorlock>
                                                                                        <center style="color: #ffffff; font-family: tahoma, verdana, segoe, sans-serif; font-size: 14px; font-weight: 700; line-height: 14px; mso-text-raise: 1px;">
                                                                                        {{buttonContext}}
                                                                                        </center>
                                                                                    </v:roundrect>
                                                                                </a>
                                                                            <![endif]-->
                                                                            <!--[if !mso]><!-- -->
                                                                            <span
                                                                                class="msohide es-button-border"
                                                                                style="
                                                                                    border-style: solid;
                                                                                    border-color: #2cb543;
                                                                                    background: #2e77f2;
                                                                                    border-width: 0px 0px 2px 0px;
                                                                                    display: inline-block;
                                                                                    border-radius: 9px;
                                                                                    width: auto;
                                                                                    mso-hide: all;
                                                                                    border-bottom-width: 0px;
                                                                                "
                                                                            >
                                                                                <a
                                                                                    href={{loginLink}}
                                                                                    class="es-button es-button-1697451201794"
                                                                                    target="_blank"
                                                                                    style="
                                                                                        mso-style-priority: 100 !important;
                                                                                        text-decoration: none;
                                                                                        -webkit-text-size-adjust: none;
                                                                                        -ms-text-size-adjust: none;
                                                                                        mso-line-height-rule: exactly;
                                                                                        color: #ffffff;
                                                                                        font-size: 16px;
                                                                                        display: inline-block;
                                                                                        background: #2e77f2;
                                                                                        border-radius: 9px;
                                                                                        font-family: tahoma, verdana, segoe, sans-serif;
                                                                                        font-weight: bold;
                                                                                        font-style: normal;
                                                                                        line-height: 19px;
                                                                                        width: auto;
                                                                                        text-align: center;
                                                                                        padding: 10px 20px;
                                                                                        mso-padding-alt: 0;
                                                                                        mso-border-alt: 10px solid #31cb4b;
                                                                                    "
                                                                                >
                                                                                    {{buttonContext}}
                                                                                </a>
                                                                            </span>
                                                                            <!--<![endif]-->
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="padding: 0; margin: 0; padding-top: 5px; padding-left: 20px; padding-right: 20px;">
                                                    <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                        <tr>
                                                            <td valign="top" align="center" style="padding: 0; margin: 0; width: 560px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                    <tr>
                                                                        <td align="center" style="padding: 0; margin: 0; font-size: 0;">
                                                                            <table
                                                                                border="0"
                                                                                width="100%"
                                                                                height="100%"
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;"
                                                                            >
                                                                                <tr>
                                                                                    <td style="padding: 0; margin: 0; border-bottom: 1px solid #cccccc; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center" style="margin: 0; padding-bottom: 10px; padding-top: 20px; padding-left: 20px; padding-right: 20px;">
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    -webkit-text-size-adjust: none;
                                                                                    -ms-text-size-adjust: none;
                                                                                    mso-line-height-rule: exactly;
                                                                                    font-family: tahoma, verdana, segoe, sans-serif;
                                                                                    line-height: 18px;
                                                                                    color: #191919;
                                                                                    font-size: 14px;
                                                                                "
                                                                            >
                                                                            <a
                                                                            href={{privacyPolicyLink}}
                                                                            style="
                                                                            -webkit-text-size-adjust: none;
                                                                            -ms-text-size-adjust: none;
                                                                            mso-line-height-rule: exactly;
                                                                            text-decoration: none;
                                                                            color: #191919;
                                                                            font-size: 14px;
                                                                            font-family: Poppins, sans serif;"
                                                                            targe="_blank"
                                                                            >
                                                                                Privacy Policy </a> @{{platFormName}}
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center" style="margin: 0; padding-top: 10px; padding-left: 10px; padding-right: 10px; padding-bottom: 20px; font-size: 0;">
                                                                            <table
                                                                                cellpadding="0"
                                                                                cellspacing="0"
                                                                                class="es-table-not-adapt es-social"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;"
                                                                            >
                                                                                <tr>
                                                                                    <td align="center" valign="top" style="padding: 0; margin: 0; padding-right: 20px;">
                                                                                        <a
                                                                                            target="_blank"
                                                                                            href={{fbLink}}
                                                                                            style="
                                                                                                -webkit-text-size-adjust: none;
                                                                                                -ms-text-size-adjust: none;
                                                                                                mso-line-height-rule: exactly;
                                                                                                text-decoration: underline;
                                                                                                color: #2cb543;
                                                                                                font-size: 14px;
                                                                                            "
                                                                                        >
                                                                                            <img
                                                                                                src="https://fcfhnrc.stripocdn.email/content/assets/img/social-icons/circle-black-bordered/facebook-circle-black-bordered.png"
                                                                                                alt="Fb"
                                                                                                title="Facebook"
                                                                                                width="24"
                                                                                                height="24"
                                                                                                style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;"
                                                                                            />
                                                                                        </a>
                                                                                    </td>
                                                                                    <td align="center" valign="top" style="padding: 0; margin: 0; padding-right: 20px;">
                                                                                        <a
                                                                                            target="_blank"
                                                                                            href={{instaLink}}
                                                                                            style="
                                                                                                -webkit-text-size-adjust: none;
                                                                                                -ms-text-size-adjust: none;
                                                                                                mso-line-height-rule: exactly;
                                                                                                text-decoration: underline;
                                                                                                color: #2cb543;
                                                                                                font-size: 14px;
                                                                                            "
                                                                                        >
                                                                                            <img
                                                                                                src="https://fcfhnrc.stripocdn.email/content/assets/img/social-icons/circle-black-bordered/instagram-circle-black-bordered.png"
                                                                                                alt="Ig"
                                                                                                title="Instagram"
                                                                                                width="24"
                                                                                                height="24"
                                                                                                style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;"
                                                                                            />
                                                                                        </a>
                                                                                    </td>
                                                                                    <td align="center" valign="top" style="padding: 0; margin: 0;">
                                                                                        <a
                                                                                            target="_blank"
                                                                                            href={{linkedInLink}}
                                                                                            style="
                                                                                                -webkit-text-size-adjust: none;
                                                                                                -ms-text-size-adjust: none;
                                                                                                mso-line-height-rule: exactly;
                                                                                                text-decoration: underline;
                                                                                                color: #2cb543;
                                                                                                font-size: 14px;
                                                                                            "
                                                                                        >
                                                                                            <img
                                                                                                src="https://fcfhnrc.stripocdn.email/content/assets/img/social-icons/circle-black-bordered/linkedin-circle-black-bordered.png"
                                                                                                alt="In"
                                                                                                title="Linkedin"
                                                                                                width="24"
                                                                                                height="24"
                                                                                                style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;"
                                                                                            />
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <table
                                class="es-footer"
                                cellspacing="0"
                                cellpadding="0"
                                align="center"
                                role="none"
                                style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                    table-layout: fixed !important;
                                    width: 100%;
                                    background-color: transparent;
                                    background-repeat: repeat;
                                    background-position: center top;
                                "
                            >
                                <tr>
                                    <td align="center" style="padding: 0; margin: 0;">
                                        <table
                                            class="es-footer-body"
                                            cellspacing="0"
                                            cellpadding="0"
                                            bgcolor="#ffffff"
                                            align="center"
                                            role="none"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; background-color: #ffffff; width: 600px;"
                                        >
                                            <tr class="es-mobile-hidden">
                                                <td align="left" bgcolor="#F6F6F6" style="margin: 0; padding-top: 20px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px; background-color: #f6f6f6;">
                                                    <table cellspacing="0" cellpadding="0" width="100%" role="none" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                        <tr>
                                                            <td align="left" style="padding: 0; margin: 0; width: 560px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                    <tr>
                                                                        <td align="left" style="padding: 0; margin: 0;">
                                                                            <p
                                                                                style="
                                                                                    margin: 0;
                                                                                    -webkit-text-size-adjust: none;
                                                                                    -ms-text-size-adjust: none;
                                                                                    mso-line-height-rule: exactly;
                                                                                    font-family: tahoma, verdana, segoe, sans-serif;
                                                                                    line-height: 21px;
                                                                                    color: #333333;
                                                                                    font-size: 14px;
                                                                                "
                                                                            >
                                                                                <br />
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </body>
    </html>`;
