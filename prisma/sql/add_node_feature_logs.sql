-- DropForeignKey
ALTER TABLE `league_challenges` DROP FOREIGN KEY `fk_league_challenge_league`;

-- DropForeignKey
ALTER TABLE `league_players` DROP FOREIGN KEY `fk_league_player_league`;

-- DropForeignKey
ALTER TABLE `league_rules` DROP FOREIGN KEY `league_rules_league_id_foreign`;

-- DropForeignKey
ALTER TABLE `league_session_players` DROP FOREIGN KEY `league_session_players_league_id_foreign`;

-- DropForeignKey
ALTER TABLE `league_session_players` DROP FOREIGN KEY `league_session_players_league_session_id_foreign`;

-- DropForeignKey
ALTER TABLE `league_sessions` DROP FOREIGN KEY `league_sessions_league_id_foreign`;

-- DropForeignKey
ALTER TABLE `leagues` DROP FOREIGN KEY `leagues_sport_id_foreign`;

-- DropIndex
DROP INDEX `fk_league_challenge_league` ON `league_challenges`;

-- DropIndex
DROP INDEX `fk_league_player_league` ON `league_players`;

-- DropIndex
DROP INDEX `leagues_sport_id_foreign` ON `leagues`;

-- DropIndex
DROP INDEX `player_itf_profiles_ipin_unique` ON `player_itf_profiles`;

-- DropIndex
DROP INDEX `unique_rank` ON `player_itf_rankings`;

-- AlterTable
ALTER TABLE `academy_claim_reports` DROP COLUMN `platform`;

-- AlterTable
ALTER TABLE `academy_claims` DROP COLUMN `platform`;

-- AlterTable
ALTER TABLE `academy_program_users` MODIFY `end_date` TIMESTAMP(0) NOT NULL DEFAULT '0000-00-00 00:00:00';

-- AlterTable
ALTER TABLE `academy_sports` DROP COLUMN `status`;

-- AlterTable
ALTER TABLE `aita_profile_reports` DROP COLUMN `platform`;

-- AlterTable
ALTER TABLE `itf_profile_reports` DROP COLUMN `platform`;

-- AlterTable
ALTER TABLE `league_challenges` DROP COLUMN `challenger_id`,
    DROP COLUMN `opponent_points`,
    ADD COLUMN `challenge_from` BIGINT UNSIGNED NOT NULL,
    ADD COLUMN `challenge_from_partner` BIGINT NULL,
    ADD COLUMN `challenge_to` BIGINT UNSIGNED NOT NULL,
    ADD COLUMN `challenge_to_partner` BIGINT NULL,
    ADD COLUMN `challenge_type` ENUM('single', 'doubles') NULL DEFAULT 'single',
    ADD COLUMN `match_time` VARCHAR(20) NULL,
    MODIFY `challenger_points` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `leagues` DROP COLUMN `group`,
    DROP COLUMN `sport_id`;

-- AlterTable
ALTER TABLE `migrations` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `player_itf_profiles` DROP COLUMN `ipin`;

-- AlterTable
ALTER TABLE `player_itf_rankings` DROP PRIMARY KEY;

-- AlterTable
ALTER TABLE `player_matrix_featured_matches` ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `sports` DROP COLUMN `logo_md`,
    DROP COLUMN `logo_sm`,
    DROP COLUMN `watermark_md`,
    DROP COLUMN `watermark_sm`;

-- AlterTable
ALTER TABLE `tournament_contents` MODIFY `tournament_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tournament_draws` DROP PRIMARY KEY,
    MODIFY `id` BIGINT UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `tournaments` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `host_live_matches`;

-- DropTable
DROP TABLE `job_batches`;

-- DropTable
DROP TABLE `league_rules`;

-- DropTable
DROP TABLE `league_session_players`;

-- DropTable
DROP TABLE `league_sessions`;

-- DropTable
DROP TABLE `migrations_backup`;

-- DropTable
DROP TABLE `tournament_event_courts`;

-- DropTable
DROP TABLE `tournament_event_venues`;

-- DropTable
DROP TABLE `tournament_events`;

-- DropTable
DROP TABLE `tournament_galleries`;

-- DropTable
DROP TABLE `tournament_galleries_folders`;

-- DropTable
DROP TABLE `tournament_groups`;

-- DropTable
DROP TABLE `tournament_match_rules`;

-- DropTable
DROP TABLE `tournament_match_score_logs`;

-- DropTable
DROP TABLE `tournament_match_scores`;

-- DropTable
DROP TABLE `tournament_metas`;

-- DropTable
DROP TABLE `tournament_officials`;

-- DropTable
DROP TABLE `tournament_open_draw_score_logs`;

-- DropTable
DROP TABLE `tournament_open_draws`;

-- DropTable
DROP TABLE `tournament_open_event_players`;

-- DropTable
DROP TABLE `tournament_participants`;

-- DropTable
DROP TABLE `tournament_payments`;

-- DropTable
DROP TABLE `tournament_player_check_ins`;

-- DropTable
DROP TABLE `tournament_publish_requests`;

-- DropTable
DROP TABLE `tournament_registration_payment`;

-- DropTable
DROP TABLE `tournament_registration_templates`;

-- DropTable
DROP TABLE `tournament_registration_withdrawals`;

-- DropTable
DROP TABLE `tournament_registrations`;

-- DropTable
DROP TABLE `tournament_registrations_invites`;

-- DropTable
DROP TABLE `tournament_round_entries`;

-- DropTable
DROP TABLE `tournament_settings`;

-- DropTable
DROP TABLE `tournament_team_matches`;

-- DropTable
DROP TABLE `tournament_team_points`;

-- DropTable
DROP TABLE `tournament_team_schedules`;

-- DropTable
DROP TABLE `tournament_teams`;

-- DropTable
DROP TABLE `tournament_transaction`;

-- DropTable
DROP TABLE `tournament_types`;

-- DropTable
DROP TABLE `tournament_variations`;

-- DropTable
DROP TABLE `tournament_venues`;

-- DropTable
DROP TABLE `tournament_whatsapp_logs`;

-- DropTable
DROP TABLE `tourparttotalplayers`;

-- DropTable
DROP TABLE `trackings`;

-- DropTable
DROP TABLE `training_program_batch_assigns`;

-- DropTable
DROP TABLE `training_program_batch_players`;

-- DropTable
DROP TABLE `training_program_batch_session_assigns`;

-- DropTable
DROP TABLE `training_program_batch_session_drill_assigns`;

-- DropTable
DROP TABLE `training_program_batch_session_drill_players`;

-- DropTable
DROP TABLE `training_program_batch_session_drills`;

-- DropTable
DROP TABLE `training_program_batch_session_players`;

-- DropTable
DROP TABLE `training_program_batch_sessions`;

-- DropTable
DROP TABLE `training_program_batches`;

-- DropTable
DROP TABLE `training_programs`;

-- DropTable
DROP TABLE `tshirt_claim_logs`;

-- DropTable
DROP TABLE `tshirt_claim_notes`;

-- DropTable
DROP TABLE `tshirt_claim_requests`;

-- DropTable
DROP TABLE `tshirt_galleries`;

-- DropTable
DROP TABLE `umpire_contact_requests`;

-- DropTable
DROP TABLE `umpire_inquiries`;

-- DropTable
DROP TABLE `umpire_settings`;

-- DropTable
DROP TABLE `user_access_logs`;

-- DropTable
DROP TABLE `user_details`;

-- DropTable
DROP TABLE `user_documents`;

-- DropTable
DROP TABLE `user_gallery_images`;

-- DropTable
DROP TABLE `user_locations`;

-- DropTable
DROP TABLE `users`;

-- DropTable
DROP TABLE `users_bank_details`;

-- DropTable
DROP TABLE `venues`;

-- CreateTable
CREATE TABLE `node_feature_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `feature` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tournament_contents` ADD CONSTRAINT `tournament_contents_tournament_id_fkey` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
