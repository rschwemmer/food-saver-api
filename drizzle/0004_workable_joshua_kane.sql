CREATE TABLE `user_ingredients` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	`user_id` int,
	`quantity` int,
	`created` timestamp(2) NOT NULL DEFAULT (now()),
	`updated` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP);
