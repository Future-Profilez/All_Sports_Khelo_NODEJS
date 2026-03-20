-- AlterTable
ALTER TABLE `ask_tournaments` DROP COLUMN `featured`,
    ADD COLUMN `featured` TIMESTAMP(0) NULL;