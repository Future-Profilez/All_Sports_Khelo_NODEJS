-- AlterTable
ALTER TABLE `academy_claim_reports` ADD COLUMN `platform` VARCHAR(255) NULL DEFAULT 'web';

-- AlterTable
ALTER TABLE `academy_claims` ADD COLUMN `platform` VARCHAR(255) NULL DEFAULT 'web';

-- AlterTable
ALTER TABLE `academy_sports` ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `aita_profile_reports` ADD COLUMN `platform` VARCHAR(255) NULL DEFAULT 'web';

-- AlterTable
ALTER TABLE `itf_profile_reports` ADD COLUMN `platform` VARCHAR(255) NULL DEFAULT 'web';

-- AlterTable
ALTER TABLE `league_challenges` DROP COLUMN `challenge_from`,
    DROP COLUMN `challenge_from_partner`,
    DROP COLUMN `challenge_to`,
    DROP COLUMN `challenge_to_partner`,
    DROP COLUMN `challenge_type`,
    DROP COLUMN `match_time`,
    ADD COLUMN `challenger_id` BIGINT UNSIGNED NOT NULL,
    ADD COLUMN `opponent_points` DOUBLE NULL DEFAULT 0,
    MODIFY `challenger_points` DOUBLE NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `leagues` ADD COLUMN `group` VARCHAR(255) NULL,
    ADD COLUMN `sport_id` CHAR(36) NULL;

-- AlterTable
ALTER TABLE `migrations` DROP PRIMARY KEY,
    MODIFY `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `player_itf_profiles` ADD COLUMN `ipin` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `sports` ADD COLUMN `logo_md` VARCHAR(255) NULL,
    ADD COLUMN `logo_sm` VARCHAR(255) NULL,
    ADD COLUMN `watermark_md` VARCHAR(255) NULL,
    ADD COLUMN `watermark_sm` VARCHAR(255) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tournament_draws` MODIFY `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tournament_event_courts` ADD COLUMN `youtube_link` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `tournament_open_draws` DROP COLUMN `winner_points`,
    ADD COLUMN `winning_point` INTEGER NULL DEFAULT 7;

-- AlterTable
ALTER TABLE `tournament_registrations` ADD COLUMN `registration_number` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `tournament_settings` ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tournament_team_matches` MODIFY `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tournament_teams` ADD COLUMN `cover_banner` VARCHAR(255) NULL,
    MODIFY `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tournaments` MODIFY `uuid` CHAR(36) NOT NULL,
    ADD PRIMARY KEY (`id`, `uuid`);

-- DropTable
DROP TABLE `tournament_registration_withdraw`;

-- CreateTable
CREATE TABLE `host_live_matches` (
    `id` CHAR(36) NOT NULL,
    `user_id` BIGINT UNSIGNED NULL,
    `umpire_id` BIGINT UNSIGNED NULL,
    `sport_id` CHAR(36) NULL,
    `title` VARCHAR(255) NULL,
    `type` TEXT NULL,
    `player_1_name` VARCHAR(255) NULL,
    `player_2_name` VARCHAR(255) NULL,
    `opponent_1_name` VARCHAR(255) NULL,
    `opponent_2_name` VARCHAR(255) NULL,
    `sets` VARCHAR(255) NULL,
    `winning_point` INTEGER NULL,
    `max_point_cap` INTEGER NULL,
    `service` TEXT NULL,
    `toss` TEXT NULL,
    `reason` TEXT NULL,
    `timer` TEXT NULL,
    `score` TEXT NULL,
    `action` TEXT NULL,
    `match_date` DATE NULL,
    `match_time` TIME(0) NULL,
    `match_started_at` TIMESTAMP(0) NULL,
    `match_ended_at` TIMESTAMP(0) NULL,
    `winner` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `job_batches` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `total_jobs` INTEGER NOT NULL,
    `pending_jobs` INTEGER NOT NULL,
    `failed_jobs` INTEGER NOT NULL,
    `failed_job_ids` LONGTEXT NOT NULL,
    `options` MEDIUMTEXT NULL,
    `cancelled_at` INTEGER NULL,
    `created_at` INTEGER NOT NULL,
    `finished_at` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `league_rules` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `league_id` BIGINT UNSIGNED NOT NULL,
    `session_frequency` VARCHAR(255) NULL,
    `max_players` INTEGER NOT NULL DEFAULT 0,
    `win_points` DOUBLE NOT NULL DEFAULT 0,
    `loss_points` DOUBLE NOT NULL DEFAULT 0,
    `rank_algo` ENUM('point', 'swap', 'bump') NOT NULL DEFAULT 'point',
    `max_rank_swap_range` INTEGER NOT NULL DEFAULT 0,
    `sets` VARCHAR(255) NULL,
    `set_win_points` INTEGER NOT NULL DEFAULT 7,
    `set_win_point_gap` INTEGER NOT NULL DEFAULT 2,
    `allow_self_join` BOOLEAN NOT NULL DEFAULT false,
    `challenge_expires_in` INTEGER NOT NULL DEFAULT 0,
    `challenge_max_rank_gap` INTEGER NOT NULL DEFAULT 3,
    `can_challenge_below` BOOLEAN NOT NULL DEFAULT false,
    `challenge_below_max_rank_gap` INTEGER NOT NULL DEFAULT 3,
    `rechallenge_window` INTEGER NULL DEFAULT 7,
    `challenge_deny_penalty` BOOLEAN NOT NULL DEFAULT false,
    `challenge_deny_forfeit` BOOLEAN NOT NULL DEFAULT false,
    `tie_break` BOOLEAN NOT NULL DEFAULT false,
    `max_match_per_player` INTEGER NOT NULL DEFAULT 0,
    `rank_reset_type` ENUM('full', 'soft', 'none') NOT NULL DEFAULT 'full',
    `carry_forward_points` VARCHAR(255) NULL,
    `inactivity_rules` LONGTEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,

    INDEX `league_rules_league_id_foreign`(`league_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `league_session_players` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `league_id` BIGINT UNSIGNED NOT NULL,
    `league_session_id` CHAR(36) NOT NULL,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `partner_id` BIGINT UNSIGNED NULL,
    `rank_position` INTEGER NULL DEFAULT 0,
    `points` DOUBLE NULL DEFAULT 0,
    `wins` INTEGER NULL DEFAULT 0,
    `losses` INTEGER NULL DEFAULT 0,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,

    INDEX `league_session_players_league_id_foreign`(`league_id`),
    INDEX `league_session_players_league_session_id_foreign`(`league_session_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `league_sessions` (
    `id` CHAR(36) NOT NULL,
    `league_id` BIGINT UNSIGNED NOT NULL,
    `session_name` VARCHAR(255) NULL,
    `start_date` DATE NULL,
    `end_date` DATE NULL,
    `status` ENUM('ongoing', 'upcoming', 'completed') NULL DEFAULT 'ongoing',
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,

    INDEX `league_sessions_league_id_foreign`(`league_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `migrations_backup` (
    `id` INTEGER UNSIGNED NOT NULL,
    `migration` VARCHAR(255) NOT NULL,
    `batch` INTEGER NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tournament_registration_withdrawals` (
    `uuid` CHAR(36) NOT NULL,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `tournament_id` BIGINT UNSIGNED NOT NULL,
    `tournament_registration_id` BIGINT UNSIGNED NOT NULL,
    `reason` LONGTEXT NULL,
    `status` VARCHAR(255) NULL,
    `payment_status` VARCHAR(255) NULL,
    `prossed_by` VARCHAR(255) NULL,
    `fine` VARCHAR(255) NULL,
    `extra` TEXT NULL,
    `event_ids` TEXT NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `id` BIGINT UNSIGNED NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `fk_league_challenge_league` ON `league_challenges`(`league_id`);

-- CreateIndex
CREATE INDEX `fk_league_player_league` ON `league_players`(`league_id`);

-- CreateIndex
CREATE INDEX `leagues_sport_id_foreign` ON `leagues`(`sport_id`);

-- CreateIndex
CREATE UNIQUE INDEX `player_itf_profiles_ipin_unique` ON `player_itf_profiles`(`ipin`);

-- CreateIndex
CREATE UNIQUE INDEX `tournament_registrations_registration_number_unique` ON `tournament_registrations`(`registration_number`);

-- AddForeignKey
ALTER TABLE `league_challenges` ADD CONSTRAINT `fk_league_challenge_league` FOREIGN KEY (`league_id`) REFERENCES `leagues`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `league_players` ADD CONSTRAINT `fk_league_player_league` FOREIGN KEY (`league_id`) REFERENCES `leagues`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `leagues` ADD CONSTRAINT `leagues_sport_id_foreign` FOREIGN KEY (`sport_id`) REFERENCES `sports`(`id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `league_rules` ADD CONSTRAINT `league_rules_league_id_foreign` FOREIGN KEY (`league_id`) REFERENCES `leagues`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `league_session_players` ADD CONSTRAINT `league_session_players_league_id_foreign` FOREIGN KEY (`league_id`) REFERENCES `leagues`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `league_session_players` ADD CONSTRAINT `league_session_players_league_session_id_foreign` FOREIGN KEY (`league_session_id`) REFERENCES `league_sessions`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `league_sessions` ADD CONSTRAINT `league_sessions_league_id_foreign` FOREIGN KEY (`league_id`) REFERENCES `leagues`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
