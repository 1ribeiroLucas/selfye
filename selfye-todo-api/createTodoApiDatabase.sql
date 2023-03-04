
CREATE DATABASE todo_api_db;
\c todo_api_db; -- connects to the newly created database;

CREATE TABLE tasks(
  taskId      integer PRIMARY KEY ,
  taskStatus  varchar(12) NOT NULL,  -- finished, cancelled, open, in_progress
  taskContent text NOT NULL
);