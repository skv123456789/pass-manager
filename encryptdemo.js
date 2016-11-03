var crypto = require('crypto-js');

var secretMsg = {name:'Sita', secretName:'Janvi'};

var secretKey = '1234abc';

//encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMsg),secretKey);
console.log('Encrypted Message ' + encryptedMessage );

//Decrypt
var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted Message ' +  decryptedMessage);
console.log(decryptedMessage.secretName);