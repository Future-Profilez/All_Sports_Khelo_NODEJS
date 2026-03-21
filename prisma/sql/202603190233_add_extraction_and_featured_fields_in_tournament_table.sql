-- AlterTable
ALTER TABLE `ask_tournaments` ADD COLUMN `extracted` TINYINT NOT NULL DEFAULT 0,
    ADD COLUMN `featured` TINYINT NOT NULL DEFAULT 0;
