const toBytes = (string) => {
    const buffer = Buffer.from(string, 'utf8');
    const result = Array(buffer.length);
    for (var i = 0; i < buffer.length; i++) {
        result[i] = buffer[i];
    }
    return result;
};

function onlyArabic(text) {
  for(byte of toBytes(text)) {
    if(!((byte >= 97 && byte <= 122) || (byte >= 65 && byte <= 97))) return false;
  }
  return true;
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

const getPasswordStrength = (password) => {
    if(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password)) {
        return 3;
    } else if(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/.test(password)) {
        return 2;
    } else return 1;
}

module.exports = {
    'secret_token': 'nivoltisthebestdiscordcopyever@#!@#!$!@#!@#',
    onlyArabic,
    validateEmail,
    getPasswordStrength,
}