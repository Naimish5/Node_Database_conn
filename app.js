var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"naimish"
})
 con.connect();
 console.log("database connected");


 var name= "naimish";
 var email = "naimish5@gmail.com";
 var contactno = "1234567890";
 var std = "8";
 var srno = "213456";
 var rollno = "101";
 var grno= "200";
 var address = "nana varachha";
 var result = "80.00";


 

//  var sql = "insert into student(name,email,rollno,std,div,english,hindi,gujarati,maths)values('"+name+"','"+email+"','"+rollno+"','"+std+"','"+div+"','"+english+"','"+hindi+"','"+gujarati+"','"+maths+"')";

var sql = "insert into student_info(name,email,contactno,std,srno,rollno,grno,address,result)values('"+name+"','"+email+"','"+contactno+"','"+std+"','"+srno+"','"+rollno+"','"+grno+"','"+address+"','"+result+"')";
 con.query(sql,function(error,results,fields){
     if (error) throw error;
     console.log('data inserted');
 });