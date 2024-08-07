
// // ->Exists
const fs = require('fs');
// fs.exists('Lab17_1.js',(ans)=>{
// 	console.log(ans);
// });


// // ->Stat
// fs.stat('Lab17_2.js',(err,ans)=>{
// 	console.log("ans=",ans);
// });


// // ->ReadFile
// fs.readFile('Lab17_2.js',(err,ans)=>{
// 	console.log("ans=",ans.toString());
// });


// ->WriteFile
fs.writeFile('Vritti.txt','Hello!',(err,ans)=>{
	console.log('saved',ans);
});


// // ->Rename
// fs.rename('Vritti.txt','VrittiSurani',(err,ans)=>{
// 	console.log('renamed',ans);
// });


// // ->Unlink
// fs.unlink('VrittiSurani',(ans)=>{
// 	console.log('deleted',ans);
// });


// ->Append
fs.appendFile('Vritti.txt','Darshan!',(ans)=>{
	console.log(ans);
});