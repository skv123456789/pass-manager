console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts',[{username: 'svishwak', balance: 100},
{username: 'shreya', balance:1000}
]);

var accounts = storage.getItemSync('accounts');

console.log(accounts);

accounts.push({username: 'Jen', balance:300});

storage.setItemSync('accounts', accounts);

var accounts = storage.getItemSync('accounts');

console.log(accounts);