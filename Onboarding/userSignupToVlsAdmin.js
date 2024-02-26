
module.exports = usersSignupToVlsAdmin = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family: arial, 'helvetica neue', helvetica, sans-serif;">
    <head>
        <meta charset="UTF-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="telephone=no" name="format-detection" />
        <title>user signup confirmation to VLS Admin -V</title>
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
                <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings>
            </xml>
        <![endif]-->
        <!--[if !mso]><!-- -->
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sora&display=swap" rel="stylesheet" />
        <!--<![endif]-->
        <style type="text/css">
            .rollover div {
                font-size: 0;
            }
            .rollover:hover .rollover-first {
                max-height: 0px !important;
                display: none !important;
            }
            .rollover:hover .rollover-second {
                max-height: none !important;
                display: block !important;
            }
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
                ol li {
                    margin-bottom: 12px !important;
                }
                .es-header-body p,
                .es-header-body ul li,
                .es-header-body ol li {
                    margin-bottom: 11px !important;
                }
                .es-footer-body p,
                .es-footer-body ul li,
                .es-footer-body ol li {
                    margin-bottom: 11px !important;
                }
                .es-infoblock p,
                .es-infoblock ul li,
                .es-infoblock ol li {
                    margin-bottom: 9px !important;
                }
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
                    line-height: 120%;
                }
                h1 {
                    font-size: 46px !important;
                    text-align: left;
                    margin-bottom: 28px;
                }
                h2 {
                    font-size: 28px !important;
                    text-align: left;
                    margin-bottom: 17px;
                }
                h3 {
                    font-size: 20px !important;
                    text-align: center;
                    margin-bottom: 12px;
                }
                .es-header-body h1 a,
                .es-content-body h1 a,
                .es-footer-body h1 a {
                    font-size: 46px !important;
                    text-align: left;
                }
                .es-header-body h2 a,
                .es-content-body h2 a,
                .es-footer-body h2 a {
                    font-size: 28px !important;
                    text-align: left;
                }

                .es-header-body h3 a,
                .es-content-body h3 a,
                .es-footer-body h3 a {
                    font-size: 20px !important;
                    text-align: center;
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
                    padding: 0 !important;
                }
                .es-m-p0r {
                    padding-right: 0 !important;
                }
                .es-m-p0l {
                    padding-left: 0 !important;
                }
                .es-m-p0t {
                    padding-top: 0 !important;
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
                .es-m-p5 {
                    padding: 5px !important;
                }
                .es-m-p5t {
                    padding-top: 5px !important;
                }
                .es-m-p5b {
                    padding-bottom: 5px !important;
                }
                .es-m-p5r {
                    padding-right: 5px !important;
                }
                .es-m-p5l {
                    padding-left: 5px !important;
                }
                .es-m-p10 {
                    padding: 10px !important;
                }

                .es-m-p10t {
                    padding-top: 10px !important;
                }
                .es-m-p10b {
                    padding-bottom: 10px !important;
                }
                .es-m-p10r {
                    padding-right: 10px !important;
                }
                .es-m-p10l {
                    padding-left: 10px !important;
                }
                .es-m-p15 {
                    padding: 15px !important;
                }
                .es-m-p15t {
                    padding-top: 15px !important;
                }
                .es-m-p15b {
                    padding-bottom: 15px !important;
                }
                .es-m-p15r {
                    padding-right: 15px !important;
                }
                .es-m-p15l {
                    padding-left: 15px !important;
                }
                .es-m-p20 {
                    padding: 20px !important;
                }
                .es-m-p20t {
                    padding-top: 20px !important;
                }
                .es-m-p20r {
                    padding-right: 20px !important;
                }
                .es-m-p20l {
                    padding-left: 20px !important;
                }
                .es-m-p25 {
                    padding: 25px !important;
                }
                .es-m-p25t {
                    padding-top: 25px !important;
                }
                .es-m-p25b {
                    padding-bottom: 25px !important;
                }
                .es-m-p25r {
                    padding-right: 25px !important;
                }
                .es-m-p25l {
                    padding-left: 25px !important;
                }
                .es-m-p30 {
                    padding: 30px !important;
                }
                .es-m-p30t {
                    padding-top: 30px !important;
                }
                .es-m-p30b {
                    padding-bottom: 30px !important;
                }
                .es-m-p30r {
                    padding-right: 30px !important;
                }

                .es-m-p30l {
                    padding-left: 30px !important;
                }
                .es-m-p35 {
                    padding: 35px !important;
                }
                .es-m-p35t {
                    padding-top: 35px !important;
                }
                .es-m-p35b {
                    padding-bottom: 35px !important;
                }
                .es-m-p35r {
                    padding-right: 35px !important;
                }
                .es-m-p35l {
                    padding-left: 35px !important;
                }
                .es-m-p40 {
                    padding: 40px !important;
                }
                .es-m-p40t {
                    padding-top: 40px !important;
                }
                .es-m-p40b {
                    padding-bottom: 40px !important;
                }
                .es-m-p40r {
                    padding-right: 40px !important;
                }
                .es-m-p40l {
                    padding-left: 40px !important;
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
    <body data-new-gr-c-s-loaded="14.1130.0" style="width: 100%; font-family: arial, 'helvetica neue', helvetica, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; padding: 0; margin: 0;">
        <div class="es-wrapper-color" style="background-color: #efefef;">
            <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#efefef"></v:fill> </v:background><![endif]-->
            <table
                class="es-wrapper"
                width="100%"
                cellspacing="0"
                cellpadding="0"
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
                    background-color: #efefef;
                "
            >
                <tr>
                    <td valign="top" style="padding: 0; margin: 0;">
                        <table
                            cellpadding="0"
                            cellspacing="0"
                            class="es-header es-mobile-hidden"
                            align="center"
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
                                <td align="center" bgcolor="#efefef" style="padding: 0; margin: 0; background-color: #efefef;">
                                    <table
                                        class="es-header-body"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; background-color: #efefef; width: 600px;"
                                        bgcolor="#efefef"
                                    >
                                        <tr>
                                            <td align="left" bgcolor="#efefef" style="padding: 0; margin: 0; padding-top: 10px; padding-bottom: 10px; background-color: #efefef;">
                                                <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                    <tr>
                                                        <td class="es-m-p0r" valign="top" align="center" style="padding: 0; margin: 0; width: 600px;">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                <tr>
                                                                    <td align="left" style="padding: 0; margin: 0;">
                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                -webkit-text-size-adjust: none;
                                                                                -ms-text-size-adjust: none;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: Poppins, sans-serif;
                                                                                line-height: 21px;
                                                                                margin-bottom: 11px;
                                                                                color: #191919;
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
                            cellpadding="0"
                            cellspacing="0"
                            class="es-content"
                            align="center"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; table-layout: fixed !important; width: 100%;"
                        >
                            <tr>
                                <td align="center" style="padding: 0; margin: 0;">
                                    <table
                                        bgcolor="#efefef"
                                        class="es-content-body"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; background-color: #efefef; width: 600px;"
                                    >
                                        <tr>
                                            <td align="left" bgcolor="#ffffff" style="padding: 0; margin: 0; padding-top: 10px; padding-bottom: 10px; background-color: #ffffff;">
                                                <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                    <tr>
                                                        <td class="es-m-p0r" valign="top" align="center" style="padding: 0; margin: 0; width: 600px;">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                <tr>
                                                                    <td align="center" style="padding: 0; margin: 0; font-size: 0px;">
                                                                    <div class="platform-logo-container" >
                                                                        <a
                                                                            target="_blank"
                                                                            href={{platformURL}}
                                                                            style="-webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; text-decoration: underline; color: #191919; font-size: 16px;"
                                                                        >
                                                                            <img
                                                                                src={{platformLogo}}
                                                                                alt
                                                                                style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;"
                                                                                width:180px;
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
                                            <td align="left" bgcolor="#ffffff" style="margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 20px; background-color: #ffffff;">
                                                <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                    <tr>
                                                        <td align="left" style="padding: 0; margin: 0; width: 560px;">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                <tr>
                                                                    <td align="center" style="padding: 0; margin: 0; font-size: 0px;">
                                                                        <a
                                                                            target="_blank"
                                                                            href=""
                                                                            style="-webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; text-decoration: underline; color: #191919; font-size: 16px;"
                                                                        >
                                                                            <img
                                                                                src={{templateLogo}}
                                                                                alt="Confirm your email address "
                                                                                style="display: block; border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;"
                                                                                width="150"
                                                                                title="Confirm your email address "
                                                                                height="150"
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding: 0; margin: 0; padding-bottom: 5px; padding-top: 10px;">
                                                                        <h3
                                                                            style="
                                                                                margin: 0;
                                                                                line-height: 22px;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: poppins, sans-serif;
                                                                                font-size: 18px;
                                                                                font-style: normal;
                                                                                font-weight: normal;
                                                                                color: #191919;
                                                                                margin-bottom: 12px;
                                                                            "
                                                                        >
                                                                            User Signup Confirmation
                                                                        </h3>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" style="padding: 0; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 30px;">
                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                -webkit-text-size-adjust: none;
                                                                                -ms-text-size-adjust: none;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: poppins, sans-serif;
                                                                                line-height: 14px;
                                                                                margin-bottom: 12px;
                                                                                color: #191919;
                                                                                font-size: 14px;
                                                                            "
                                                                        >
                                                                            Dear VLS Admin,
                                                                        </p>
                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                -webkit-text-size-adjust: none;
                                                                                -ms-text-size-adjust: none;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: poppins, sans-serif;
                                                                                line-height: 14px;
                                                                                margin-bottom: 12px;
                                                                                color: #191919;
                                                                                font-size: 14px;
                                                                            "
                                                                        >
                                                                            A new user has signed up for {{subDomainCode}}.
                                                                        </p>

                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                -webkit-text-size-adjust: none;
                                                                                -ms-text-size-adjust: none;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: poppins, sans-serif;
                                                                                line-height: 14px;
                                                                                margin-bottom: 12px;
                                                                                color: #191919;
                                                                                font-size: 14px;
                                                                            "
                                                                        >
                                                                            <br />
                                                                        </p>
                                                                        <h4 style="margin: 0; line-height: 18px; mso-line-height-rule: exactly; font-family: poppins, sans-serif; font-size: 18px;"><u>User Details</u></h4>
                                                                        <div><br /></div>
                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                -webkit-text-size-adjust: none;
                                                                                -ms-text-size-adjust: none;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: poppins, sans-serif;
                                                                                line-height: 14px;
                                                                                margin-bottom: 12px;
                                                                                color: #191919;
                                                                                font-size: 14px;
                                                                            "
                                                                        >
                                                                            Name: {{userName}}
                                                                        </p>
                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                -webkit-text-size-adjust: none;
                                                                                -ms-text-size-adjust: none;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: poppins, sans-serif;
                                                                                line-height: 14px;
                                                                                margin-bottom: 12px;
                                                                                color: #191919;
                                                                                font-size: 14px;
                                                                            "
                                                                        >
                                                                            Email: {{emailId}}
                                                                        </p>

                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                -webkit-text-size-adjust: none;
                                                                                -ms-text-size-adjust: none;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: poppins, sans-serif;
                                                                                line-height: 14px;
                                                                                margin-bottom: 12px;
                                                                                color: #191919;
                                                                                font-size: 14px;
                                                                            "
                                                                        >
                                                                            Account URL: {{accountURL}}
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
                                            <td align="left" bgcolor="#ffffff" style="padding: 0; margin: 0; padding-top: 5px; padding-left: 20px; padding-right: 20px; background-color: #ffffff;">
                                                <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                    <tr>
                                                        <td align="center" valign="top" style="padding: 0; margin: 0; width: 560px;">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
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
                                                                                font-family: Poppins, sans-serif;
                                                                                line-height: 18px;
                                                                                margin-bottom: 12px;
                                                                                color: #191919;
                                                                                font-size: 14px;
                                                                            "
                                                                        >
                                                                        <a
                                                                        style="-webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; text-decoration: none; color:  #191919; font-size: 14px;"
                                                                        href={{privacyPolicyLink}}> Copyright</a> © {{platFormName}}
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" style="padding: 0; margin: 0; padding-top: 10px; padding-bottom: 20px; font-size: 0;">
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
                                                                                            color: #191919;
                                                                                            font-size: 16px;
                                                                                        "
                                                                                    >
                                                                                        <img
                                                                                            title="Facebook"
                                                                                            src="https://fcfhnrc.stripocdn.email/content/assets/img/social-icons/circle-black-bordered/facebook-circle-black-bordered.png"
                                                                                            alt="Fb"
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
                                                                                            color: #191919;
                                                                                            font-size: 16px;
                                                                                        "
                                                                                    >
                                                                                        <img
                                                                                            title="Instagram"
                                                                                            src="https://fcfhnrc.stripocdn.email/content/assets/img/social-icons/circle-black-bordered/instagram-circle-black-bordered.png"
                                                                                            alt="Inst"
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
                                                                                            color: #191919;
                                                                                            font-size: 16px;
                                                                                        "
                                                                                    >
                                                                                        <img
                                                                                            title="Linkedin"
                                                                                            src="https://fcfhnrc.stripocdn.email/content/assets/img/social-icons/circle-black-bordered/linkedin-circle-black-bordered.png"
                                                                                            alt="In"
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
                            cellpadding="0"
                            cellspacing="0"
                            class="es-footer es-mobile-hidden"
                            align="center"
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
                                        bgcolor="#f7fff7"
                                        class="es-footer-body"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px; background-color: #ced0ce; width: 600px;"
                                    >
                                        <tr>
                                            <td align="left" bgcolor="#efefef" style="margin: 0; padding-top: 15px; padding-left: 20px; padding-right: 20px; padding-bottom: 30px; background-color: #efefef;">
                                                <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                    <tr>
                                                        <td align="center" valign="top" style="padding: 0; margin: 0; width: 560px;">
                                                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; border-spacing: 0px;">
                                                                <tr>
                                                                    <td align="left" style="padding: 0; margin: 0;">
                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                -webkit-text-size-adjust: none;
                                                                                -ms-text-size-adjust: none;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: Poppins, sans-serif;
                                                                                line-height: 21px;
                                                                                margin-bottom: 11px;
                                                                                color: #191919;
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
</html>

`