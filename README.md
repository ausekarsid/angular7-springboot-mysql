# angular7-springboot-mysql
angular7-springboot-mysql-basic

Angular 7 is used to run AngularApp
Spring boot with IDE is used to run CRUD

![Screenshot (3)](https://user-images.githubusercontent.com/47034028/79313051-67c58b00-7f1d-11ea-9e8e-177199c1ce02.png)

Check and correct the correct port numbers for mysql, java application and angular app


Use the following for the mysql database config.

use db;

CREATE TABLE user (

user_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,

username VARCHAR(30),

detail VARCHAR(30),

email VARCHAR(50)

);

select * from db.user

