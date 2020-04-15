# angular7-springboot-mysql
angular7-springboot-mysql-basic

Angular 7 is used to run AngularApp
Spring boot with IDE is used to run CRUD

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
