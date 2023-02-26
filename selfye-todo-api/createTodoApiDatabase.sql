SELECT 'CREATE DATABASE todo_api_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'todo_api_db')\gexec

CREATE TABLE tasks (
  taskId      integer PRIMARY KEY ,
  taskStatus  varchar(12) NOT NULL,  -- finished, cancelled, open, in_progress
  taskContent text NOT NULL
);