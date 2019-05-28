const http = require('http');
/*
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM('', {
  url: 'http://rozklad.kpi.ua/Schedules/ViewSchedule.aspx?g=607599b2-3369-4bda-8320-803f33aac337',
  contentType: 'text/html',
});

const temp = dom.window.document.querySelector('h1');
console.log(temp);
*/

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
}).listen(8080);
