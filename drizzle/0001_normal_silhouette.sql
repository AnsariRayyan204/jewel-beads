DROP TABLE `categories`;--> statement-breakpoint
DROP TABLE `orders`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`price` integer NOT NULL,
	`category` text NOT NULL,
	`image` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_products`("id", "name", "price", "category", "image") SELECT "id", "name", "price", "category", "image" FROM `products`;--> statement-breakpoint
DROP TABLE `products`;--> statement-breakpoint
ALTER TABLE `__new_products` RENAME TO `products`;--> statement-breakpoint
PRAGMA foreign_keys=ON;