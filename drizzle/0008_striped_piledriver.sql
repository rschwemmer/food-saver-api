RENAME TABLE `user_ingredients` TO `pantry`;--> statement-breakpoint
ALTER TABLE `ingredients` MODIFY COLUMN `updated` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `recipes` MODIFY COLUMN `updated` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `pantry` MODIFY COLUMN `name` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `pantry` MODIFY COLUMN `user_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `pantry` MODIFY COLUMN `updated` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP;