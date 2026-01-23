-- CreateTable
CREATE TABLE `ask_tournament_enquiries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `email` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `mark_as_read` TINYINT NULL DEFAULT 0,
    `tournament_id` INTEGER NOT NULL,
    `gender` ENUM('male', 'female', 'other') NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;