ALTER TABLE `ask_tournaments` ADD COLUMN `bulk_upload` TINYINT NOT NULL DEFAULT 0,
    MODIFY `sport_id` VARCHAR(255) NOT NULL,
    MODIFY `description` LONGTEXT NULL ;