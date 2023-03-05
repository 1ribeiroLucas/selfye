
CREATE DATABASE todo_api_db;
/* create to the newly connected db */
\c todo_api_db;

CREATE TABLE tasks(
  taskId      SERIAL,
  taskStatus  varchar(12) NOT NULL,  /* finished, cancelled, active, in_progress */
  taskContent text NOT NULL
);