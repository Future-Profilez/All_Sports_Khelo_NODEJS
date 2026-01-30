 ALTER TABLE `ask_tournaments` ADD COLUMN `organizer_name` VARCHAR(255) NULL AFTER `slug_name`,
MODIFY `user_id` INTEGER NOT NULL,
MODIFY `state_id` INTEGER NOT NULL;
