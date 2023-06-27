CREATE TABLE `sub_categories` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	`cat_id` int,
	`created` timestamp(2) NOT NULL DEFAULT (now()),
	`updated` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);
