const url = require('url');

const myUrl = new URL(
    'http://mywebsite.com:8000/hello.html?id=100&status=active'
);

//SERİALİZED URL 
console.log(myUrl.href);
console.log(myUrl.toString());
//outputs:http://mywebsite.com:8000/hello.html?id=100&status=active

//HOST (ROOT DOMAİN)
console.log(myUrl.host);
//outputs:mywebsite.com:8000

//HOSTNAME (DOES NOT GET PORT)
console.log(myUrl.hostname);
//outputs: mywebsite.com

//PATHNAME
console.log(myUrl.pathname);
//output: /hello.html

//SERİALİZED QUERY
console.log(myUrl.search);
//output: ?id=100&status=active

//SERİALİZED PARAMS OBJECT
console.log(myUrl.searchParams);
//output: URLSearchParams { 'id' => '100', 'status' => 'active' }

//ADD PARAM
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//output: URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

//LOOP THROUGH PARAMS
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));
//outouts:
//id : 100
//status : active
//abc : 123