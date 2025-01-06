# mindlink

## Database Creation

CREATE DATABASE mindlink;

USE mindlink;

create table `status` (
`id` int not null auto_increment primary key,
`status` TEXT not null
);

create table `roles` (
`id` int not null auto_increment primary key,
`name` TEXT not null
);

create table `games` (
`id` int not null auto_increment primary key,
`words` TEXT not null,
`wordclass` TEXT not null,
`created` DATETIME not null
);

create table `playgame` (
`id` int not null auto_increment primary key,
`code` TEXT not null,
`gameid` INT not null,
`status` INT not null,
FOREIGN KEY (gameid) REFERENCES games(id),
FOREIGN KEY (status) REFERENCES status(id)
);

create table `users` (
`id` int not null auto_increment primary key,
`key` TEXT not null,
`name` TEXT not null,
`team` INT not null,
`role` INT not null,
`game` INT not null,
FOREIGN KEY (role) REFERENCES roles(id),
FOREIGN KEY (game) REFERENCES playgame(id)
);

```
MariaDB [mindlink]> SHOW TABLES;
+--------------------+
| Tables_in_mindlink |
+--------------------+
| games              |
| playgame           |
| roles              |
| status             |
| users              |
+--------------------+
5 rows in set (0.001 sec)
```

INSERT INTO status (status) VALUES ('Spielt'), ('Wartend'), ('Beendet');
INSERT INTO roles (name) VALUES ('Rater'), ('Erklärer');
