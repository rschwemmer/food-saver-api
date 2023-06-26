CREATE TABLE `categories` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	`created` timestamp(2) NOT NULL DEFAULT (now()),
	`updated` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
ALTER TABLE `ingredients` ADD `user_id` int;