CREATE TABLE `ingredients` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	`price` float,
	`created` timestamp(2) NOT NULL DEFAULT (now()),
	`updated` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
ALTER TABLE `users` ADD `created` timestamp(2) DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `updated` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP;