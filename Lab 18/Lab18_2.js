
const http = require('http')
const fs = require('fs');

const server = http.createServer((req,res)=>{



res.SetHeader('Content-Type','text/html');

if(req.url=="/favicon.ico"){
	res.end(' ');
}
else if (req.url=="/home"){
	res.statuscode=200;
	res.end("Welcome Home!");
}
else if (req.url=="/about"){
	res.statuscode=200;
	res.end("this is about me.");
}
else if (req.url=="/services"){
	res.statuscode=200;
	res.end('I provide various services.');
}
else if (req.url=="/contact"){
	res.statuscode=200;
	res.end('My Phone= <h2> 1234567890 </h2>');
}
else if (req.url=="/inquiry"){
	res.statuscode=200;
	res.end('How May I help you?');
}
else {
	res.statuscode=404;
	console.log(req.url);
	res.end('Bye Bye World!');
}

data = fs.readFileSync('My_Website.html')
res.end(data);
})

server.listen(4000,()=>{
    console.log("server started at 4000");
});