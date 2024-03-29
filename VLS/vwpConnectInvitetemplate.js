const vwpConnectInvitetemplate = (data) => {

    const { orgName, designation, userName, imageID } = data;
    console.log("admin", data, orgName, designation, userName, imageID );
    console.log("user", data);
    const htmlBody = `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
    
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="x-apple-disable-message-reformatting" />
        <!--[if !mso]><!-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css?family=Raleway !important" rel="stylesheet">
        <!--<![endif]-->
        <title> </title>
        <!--[if gte mso 9]>
        <style type="text/css" media="all">
            sup { font-size: 100% !important; }
        </style>
        <![endif]-->
    
    
        <style type="text/css" media="screen">
            /* Linked Styles */
            body {
                padding: 0 !important;
                margin: 0 !important;
                display: block !important;
                min-width: 100% !important;
                width: 100% !important;
                background: #fff;
                -webkit-text-size-adjust: none
            }
    
            a {
                color: #00a2ff;
                text-decoration: none
            }
    
            p {
                padding: 0 !important;
                margin: 0 !important
            }
    
            img {
                -ms-interpolation-mode: bicubic;
                /* Allow smoother rendering of resized image in Internet Explorer */
            }
    
            .mcnPreviewText {
                display: none !important;
            }
    
            .cke_editable,
            .cke_editable a,
            .cke_editable span,
            .cke_editable a span {
                color: #000001 !important;
            }
    
            /* Mobile styles */
            @media only screen and (max-device-width: 480px),
            only screen and (max-width: 480px) {
                .mobile-shell {
                    width: 100% !important;
                    min-width: 100% !important;
                }
    
                .bg {
                    background-size: 100% auto !important;
                    -webkit-background-size: 100% auto !important;
                }
    
                .text-header,
                .m-center {
                    text-align: center !important;
                }
    
                .center {
                    margin: 0 auto !important;
                }
    
                .container {
                    padding: 20px 10px !important
                }
    
                .td {
                    width: 100% !important;
                    min-width: 100% !important;
                }
    
                .m-br-15 {
                    height: 15px !important;
                }
    
                .p30-15 {
                    padding: 30px 15px !important;
                }
    
                .p40 {
                    padding: 20px !important;
                }
    
                .m-td,
                .m-hide {
                    display: none !important;
                    width: 0 !important;
                    height: 0 !important;
                    font-size: 0 !important;
                    line-height: 0 !important;
                    min-height: 0 !important;
                }
    
                .m-block {
                    display: block !important;
                }
    
                .fluid-img img {
                    width: 100% !important;
                    max-width: 100% !important;
                    height: auto !important;
                }
    
                .column,
                .column-top,
                .column-empty,
                .column-empty2,
                .column-dir-top {
                    float: left !important;
                    width: 100% !important;
                    display: block !important;
                }
    
                .column-empty {
                    padding-bottom: 10px !important;
                }
    
                .column-empty2 {
                    padding-bottom: 20px !important;
                }
    
                .content-spacing {
                    width: 15px !important;
                }
            }
        </style>
    </head>
    
    <body class="body"
        style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f4f4f4; -webkit-text-size-adjust:none;">
        <!--*|IF:MC_PREVIEW_TEXT|*-->
        <!--[if !gte mso 9]><!-->
        <!--<![endif]-->
        <!--*|END:IF|*-->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f5f9">
            <tr>
                <td align="center" valign="top">
                    <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                        <tr>
                            <td class="td container"
                                style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
    
    
                                <!-- End of HIDDEN PREHEADER TEXT -->
                                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"
                                    style="max-width:600px; width:100%; min-width:425px; margin:0px auto; border:0px; table-layout: fixed;">
                                    <tr>
                                        <td style="background-color:#FFF; padding:0px;">
    
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"
                                                style="max-width:600px; width:100%; min-width:360px; margin:0px auto;  table-layout: fixed; ">
                                                <!-- <tr> -->
                                                <!-- </tr> -->
                                                <tr>
    
                                                    <td bgcolor="#ffffff" align="center" valign="top"
                                                        style="padding:20px 30px 0px 30px; margin:0px; font-family: 'Poppins',Arial,sans-serif; font-size:26px;">
                                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                            width="600"
                                                            style="max-width:600px; width:100%; min-width:360px; margin:0px auto;  table-layout: fixed;">
                                                            <tr>
                                                            <td align="center" style="padding:30px 0 30px 0">
                                                                <a href="https://voltuswave.com/" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><img src="https://voltuswave.com/wp-content/uploads/2022/08/vw-logo.png" width="" height=""  style="max-width:200px;" border="0" alt="" /></a></td>
                                                            </td>
                                                        </tr>
                                    
                                                            <tr>
    
                                                                <td bgcolor="#ffffff" align="center" valign="top"
                                                                    style="padding:15px 30px 0 30px; margin:0px; font-family: 'Poppins',Arial,sans-serif; font-size:25px; color:#070505; line-height:35px;font-weight:600">
                                                                    ${userName} invited you to connect
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#ffffff" align="center" valign="top"
                                                                    style="padding:20px 0px 0px 0px; margin:0px; font-family: 'Poppins',Arial,sans-serif; font-size:26px; color:#0a12cd;">
                                                                    <!-- <img src="https://invest.invescomutualfund.com/mailcontent/images/div-540.jpg"
                                                                        width="100%"
                                                                        style="display: block; max-width:540px; height:8px;"
                                                                        border="0"> -->
                                                                
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td bgcolor="#ffffff" align="center" valign="top"
                                                                    style="padding:30px 0px 0px; margin:0px; font-family: 'Poppins',Arial,sans-serif; font-size:15px; color:#000000; line-height:24px;">
    
                                                                </td>
                                                            </tr>
    
                                                            <tr>
                                                                <td bgcolor="#ffffff" align="center" valign="top"
                                                                    style="padding:10px 30px; margin:0px; font-family: 'Poppins',Arial,sans-serif; font-size:15px; color:#000000; line-height:24px; ">
    
                                                                    <table align="center" cellpadding="0" cellspacing="0"
                                                                        style="max-width:460px; width:100%;margin-bottom: 50px;">
                                                                        <tr>
                                                                            <td align="center" style="padding:0px 0 0px 0">
                                                                                <img src="https://randomuser.me/api/portraits/lego/2.jpg" width="80px" height="80px"  style="max-width:200px; border-radius: 45%;" border="0" alt="" /></td>
                                                                            </td>
    
                                                                        </tr>
                                                                        
                                                                        <tr>
                                                                            <td align="center"
                                                                                style="padding:0px; padding-top:15px; width:135px; font-family: 'Poppins',Arial,sans-serif; font-size: 20px; color:#231f20; font-weight:bold; line-height:18px;">
                                                                                ${userName}</td>
                                                                        
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center"
                                                                                style="padding:0px; padding-top:15px; width:135px; font-family: 'Poppins',Arial,sans-serif; font-size: 14px; color:#231f20; font-weight:200; line-height:18px;">
                                                                                ${designation}</td>
                        
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center"
                                                                                style="padding:0px; padding-top:5px; width:135px; font-family: 'Poppins',Arial,sans-serif; font-size: 14px; color:#231f20; font-weight:200; line-height:18px;">
                                                                                ${orgName}</td>
                        
                                                                            </td>
                                                                        </tr>
    
                                                                    </table>
                                                                    <!-- Button -->
                                                                    <tr mc:hideable="">
                                                                    <td align="center" style="padding:0px 0px 30px; margin:0px; font-family: 'Poppins',Arial,sans-serif; font-size:15px; color:#000000; line-height:24px; ">
                                                                        <table border="0" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                            
                                                                            
                                                                            <tr>
                                                                                <td class="text-button" style="background:#1976d2; color:#ffffff; font-family:'Poppins',Arial,sans-serif !important; font-size:14px; line-height:18px; padding:12px 20px; text-align:center; border-radius:30px; font-weight:500"><a href="https://cloud.voltussprint.com/login.html" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;letter-spacing: 0.7px;"><span class="link-white" style="color:#ffffff; text-decoration:none;">View Invitation</span></a></td>
                                                                            </tr>
                                                                        </tbody></table>
                                                                    </td>
                                                                    </tr>
                                                                    
    
                                                                    <!-- Footer -->
                                                                    <table width="100%" border="0" cellspacing="0"
                                                                        cellpadding="0">
                                                                        <tr>
                                                                            <td class="p30-15"
                                                                                style="padding:0 0 50px 0;"
                                                                                bgcolor="#ffffff">
                                                                                <table width="100%" border="0"
                                                                                    cellspacing="0" cellpadding="0"
                                                                                    style="border-top: 1px solid #ddd;">
                                                                                    <tr>
                                                                                        <td align="center"
                                                                                            style="padding-bottom: 30px; padding-top: 30px">
                                                                                            <table border="0"
                                                                                                cellspacing="0"
                                                                                                cellpadding="0">
                                                                                                <tr>
                                                                                                    <td class="img"
                                                                                                        width="55"
                                                                                                        style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                                        <a href="https://www.facebook.com/voltuswave"
                                                                                                            target="_blank"><img
                                                                                                                src="https://voltuswave.com/wp-content/uploads/2022/08/t8_ico_facebook.jpg"
                                                                                                                width="38"
                                                                                                                height="38"
                                                                                                                style="max-width:38px;"
                                                                                                                border="0"
                                                                                                                alt="" /></a>
                                                                                                    </td>
                                                                                                    <td class="img"
                                                                                                        width="55"
                                                                                                        style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                                        <a href="https://twitter.com/voltuswave"
                                                                                                            target="_blank"><img
                                                                                                                src="https://voltuswave.com/wp-content/uploads/2022/08/t8_ico_twitter.jpg"
                                                                                                                width="38"
                                                                                                                height="38"
                                                                                                                
                                                                                                                style="max-width:38px;"
                                                                                                                border="0"
                                                                                                                alt="" /></a>
                                                                                                    </td>
                                                                                                    <td class="img"
                                                                                                        width="38"
                                                                                                        style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                                        <a href="https://www.linkedin.com/company/voltusone/?originalSubdomain=in"
                                                                                                            target="_blank"><img
                                                                                                                src="https://voltuswave.com/wp-content/uploads/2022/08/t8_ico_linkedin.jpg"
                                                                                                                width="38"
                                                                                                                height="38"
                                                                                                                
                                                                                                                style="max-width:38px;"
                                                                                                                border="0"
                                                                                                                alt="" /></a>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="text-footer1 pb10"
                                                                                            style="color:#e6212e; font-family: 'Poppins',Arial,sans-serif; font-size:14px;font-weight: 600;letter-spacing: 0.7px;	 line-height:20px; text-align:center; padding-bottom:10px;">
                                                                                            
                                                                                                <a href="https://voltuswave.com/" target="_blank" class="link-white" style="color:#e6212e; text-decoration:none;">VoltusWave</a>
                                                                                            
                                                                                        </td>
                                                                                    </tr>
    
    
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <!-- END Footer -->
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
    </body>
    
    </html>`;
    return htmlBody;
};

module.exports = { vwpConnectInvitetemplate };
