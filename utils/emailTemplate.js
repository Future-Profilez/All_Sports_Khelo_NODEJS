const fs = require('fs')
const path = require('path')

exports.getEmailOtpTemplate = ({ name, otp }) => {
    const filePath = path.join(
        process.cwd(),
        "template",
        "emailOtp.html"
    );
    let html = fs.readFileSync(filePath, 'utf-8');

    html = html.replace('{{name}}', name || "User");
    html = html.replace('{{otp}}', otp);

    return html;
}