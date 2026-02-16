-- DropForeignKey
ALTER TABLE `league_challenge_score_reports` DROP FOREIGN KEY `fk_challenge_score_report_challenge`;

-- DropForeignKey
ALTER TABLE `league_challenge_score_reports` DROP FOREIGN KEY `fk_challenge_score_report_league`;

-- DropForeignKey
ALTER TABLE `league_challenges` DROP FOREIGN KEY `fk_league_challenge_league`;

-- DropForeignKey
ALTER TABLE `league_player_rank_logs` DROP FOREIGN KEY `league_player_rank_logs_league_challenge_id_foreign`;

-- DropForeignKey
ALTER TABLE `league_player_rank_logs` DROP FOREIGN KEY `league_player_rank_logs_league_id_foreign`;

-- DropForeignKey
ALTER TABLE `league_player_rank_logs` DROP FOREIGN KEY `league_player_rank_logs_league_player_id_foreign`;

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

-- DropForeignKey
ALTER TABLE `tournament_registration_payment` DROP FOREIGN KEY `tournament_registration_payment_payment_account_id_foreign`;

-- DropIndex
DROP INDEX `academies_country_id` ON `academies`;

-- DropIndex
DROP INDEX `academy_city_id` ON `academies`;

-- DropIndex
DROP INDEX `academy_name` ON `academies`;

-- DropIndex
DROP INDEX `academy_slug_name` ON `academies`;

-- DropIndex
DROP INDEX `academy_state_city_id` ON `academies`;

-- DropIndex
DROP INDEX `academy_state_id` ON `academies`;

-- DropIndex
DROP INDEX `academy_user_id` ON `academies`;

-- DropIndex
DROP INDEX `academy_uuid` ON `academies`;

-- AlterTable
ALTER TABLE `ask_tournaments` MODIFY `sport_id` VARCHAR(255) NOT NULL,
    MODIFY `description` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `sports` DROP COLUMN `logo_md`,
    DROP COLUMN `logo_sm`,
    DROP COLUMN `watermark_md`,
    DROP COLUMN `watermark_sm`;

-- AlterTable
ALTER TABLE `states` ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tournament_contents` MODIFY `id` BIGINT UNSIGNED NOT NULL,
    MODIFY `tournament_id` INTEGER UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `tournament_galleries` MODIFY `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tournament_galleries_folders` MODIFY `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tournaments` DROP PRIMARY KEY,
    DROP COLUMN `fee_by_category`,
    DROP COLUMN `is_fee_by_category`,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `_custom_migrations`;

-- DropTable
DROP TABLE `academy_addons`;

-- DropTable
DROP TABLE `academy_admin_permissions`;

-- DropTable
DROP TABLE `academy_bookings`;

-- DropTable
DROP TABLE `academy_claim_docs`;

-- DropTable
DROP TABLE `academy_claim_logs`;

-- DropTable
DROP TABLE `academy_claim_notes`;

-- DropTable
DROP TABLE `academy_claim_report_docs`;

-- DropTable
DROP TABLE `academy_claim_report_logs`;

-- DropTable
DROP TABLE `academy_claim_report_notes`;

-- DropTable
DROP TABLE `academy_claim_reports`;

-- DropTable
DROP TABLE `academy_claims`;

-- DropTable
DROP TABLE `academy_courts`;

-- DropTable
DROP TABLE `academy_delete_request_logs`;

-- DropTable
DROP TABLE `academy_delete_requests`;

-- DropTable
DROP TABLE `academy_features`;

-- DropTable
DROP TABLE `academy_holidays`;

-- DropTable
DROP TABLE `academy_images`;

-- DropTable
DROP TABLE `academy_info`;

-- DropTable
DROP TABLE `academy_inquiries`;

-- DropTable
DROP TABLE `academy_inquiry_follow_ups`;

-- DropTable
DROP TABLE `academy_inquiry_logs`;

-- DropTable
DROP TABLE `academy_inquiry_notes`;

-- DropTable
DROP TABLE `academy_list_requests`;

-- DropTable
DROP TABLE `academy_listing_logs`;

-- DropTable
DROP TABLE `academy_logs`;

-- DropTable
DROP TABLE `academy_players`;

-- DropTable
DROP TABLE `academy_program_users`;

-- DropTable
DROP TABLE `academy_ratings`;

-- DropTable
DROP TABLE `academy_reported_reviews`;

-- DropTable
DROP TABLE `academy_review_replies`;

-- DropTable
DROP TABLE `academy_rooms`;

-- DropTable
DROP TABLE `academy_rules`;

-- DropTable
DROP TABLE `academy_seo_content_settings`;

-- DropTable
DROP TABLE `academy_sports`;

-- DropTable
DROP TABLE `add_ons`;

-- DropTable
DROP TABLE `add_ons_prices`;

-- DropTable
DROP TABLE `admin_emulates`;

-- DropTable
DROP TABLE `advertisement_locations`;

-- DropTable
DROP TABLE `advertisment_clients`;

-- DropTable
DROP TABLE `advertisment_details`;

-- DropTable
DROP TABLE `advertisments`;

-- DropTable
DROP TABLE `age_groups`;

-- DropTable
DROP TABLE `aita_acceptance_list_entries`;

-- DropTable
DROP TABLE `aita_calendars`;

-- DropTable
DROP TABLE `aita_claim_logs`;

-- DropTable
DROP TABLE `aita_profile_claim_follow_ups`;

-- DropTable
DROP TABLE `aita_profile_claims`;

-- DropTable
DROP TABLE `aita_profile_docs`;

-- DropTable
DROP TABLE `aita_profile_notes`;

-- DropTable
DROP TABLE `aita_profile_report_docs`;

-- DropTable
DROP TABLE `aita_profile_report_logs`;

-- DropTable
DROP TABLE `aita_profile_report_notes`;

-- DropTable
DROP TABLE `aita_profile_reports`;

-- DropTable
DROP TABLE `aita_rank_sync_events`;

-- DropTable
DROP TABLE `app_media`;

-- DropTable
DROP TABLE `app_services`;

-- DropTable
DROP TABLE `ask_notes`;

-- DropTable
DROP TABLE `ask_test_table`;

-- DropTable
DROP TABLE `assocation_achievements`;

-- DropTable
DROP TABLE `assocation_album_images`;

-- DropTable
DROP TABLE `assocation_albums`;

-- DropTable
DROP TABLE `assocation_contents`;

-- DropTable
DROP TABLE `assocations`;

-- DropTable
DROP TABLE `auth_otp_requests`;

-- DropTable
DROP TABLE `auto_messages`;

-- DropTable
DROP TABLE `ball_boys`;

-- DropTable
DROP TABLE `become_partner`;

-- DropTable
DROP TABLE `booking_add_ons_prices`;

-- DropTable
DROP TABLE `booking_payments`;

-- DropTable
DROP TABLE `booking_rooms`;

-- DropTable
DROP TABLE `booking_slots`;

-- DropTable
DROP TABLE `bookings`;

-- DropTable
DROP TABLE `bounced_emails`;

-- DropTable
DROP TABLE `broadcasts`;

-- DropTable
DROP TABLE `chair_umpire_requests`;

-- DropTable
DROP TABLE `challenge_chats`;

-- DropTable
DROP TABLE `challenge_results`;

-- DropTable
DROP TABLE `coach_amenities`;

-- DropTable
DROP TABLE `coach_booking_refunds`;

-- DropTable
DROP TABLE `coach_booking_slots`;

-- DropTable
DROP TABLE `coach_bookings`;

-- DropTable
DROP TABLE `coach_gallery_images`;

-- DropTable
DROP TABLE `coach_inquiries`;

-- DropTable
DROP TABLE `coach_reported_reviews`;

-- DropTable
DROP TABLE `coach_requests`;

-- DropTable
DROP TABLE `coach_review_replies`;

-- DropTable
DROP TABLE `coach_reviews_ratings`;

-- DropTable
DROP TABLE `coach_settings`;

-- DropTable
DROP TABLE `coach_social_media`;

-- DropTable
DROP TABLE `coach_timings`;

-- DropTable
DROP TABLE `coaches`;

-- DropTable
DROP TABLE `contact_books`;

-- DropTable
DROP TABLE `contact_groups`;

-- DropTable
DROP TABLE `contact_tags`;

-- DropTable
DROP TABLE `contacts`;

-- DropTable
DROP TABLE `control_access_logs`;

-- DropTable
DROP TABLE `conversations`;

-- DropTable
DROP TABLE `country_availables`;

-- DropTable
DROP TABLE `court_rules`;

-- DropTable
DROP TABLE `court_timings`;

-- DropTable
DROP TABLE `custom_notification_reads`;

-- DropTable
DROP TABLE `custom_notifications`;

-- DropTable
DROP TABLE `customize_tournament`;

-- DropTable
DROP TABLE `customize_tournament_logs`;

-- DropTable
DROP TABLE `data_delete_logs`;

-- DropTable
DROP TABLE `default_amenities`;

-- DropTable
DROP TABLE `default_otp_users`;

-- DropTable
DROP TABLE `default_rules`;

-- DropTable
DROP TABLE `delete_account_requests`;

-- DropTable
DROP TABLE `delete_accounts`;

-- DropTable
DROP TABLE `demo_requests`;

-- DropTable
DROP TABLE `draw_players`;

-- DropTable
DROP TABLE `dummy_matches`;

-- DropTable
DROP TABLE `email_default_templates`;

-- DropTable
DROP TABLE `email_logs`;

-- DropTable
DROP TABLE `email_templates`;

-- DropTable
DROP TABLE `face_app_process_logs`;

-- DropTable
DROP TABLE `failed_jobs`;

-- DropTable
DROP TABLE `fcm_tokens`;

-- DropTable
DROP TABLE `galleries`;

-- DropTable
DROP TABLE `google_fit`;

-- DropTable
DROP TABLE `group_contacts`;

-- DropTable
DROP TABLE `groups`;

-- DropTable
DROP TABLE `help_and_support_follow_ups`;

-- DropTable
DROP TABLE `help_and_support_logs`;

-- DropTable
DROP TABLE `help_and_support_notes`;

-- DropTable
DROP TABLE `help_and_supports`;

-- DropTable
DROP TABLE `host_live_matches`;

-- DropTable
DROP TABLE `itf_calendar`;

-- DropTable
DROP TABLE `itf_claim_logs`;

-- DropTable
DROP TABLE `itf_profile_claims`;

-- DropTable
DROP TABLE `itf_profile_notes`;

-- DropTable
DROP TABLE `itf_profile_report_logs`;

-- DropTable
DROP TABLE `itf_profile_report_notes`;

-- DropTable
DROP TABLE `itf_profile_reports`;

-- DropTable
DROP TABLE `job_batches`;

-- DropTable
DROP TABLE `jobs`;

-- DropTable
DROP TABLE `league_challenge_score_reports`;

-- DropTable
DROP TABLE `league_challenge_scores`;

-- DropTable
DROP TABLE `league_challenges`;

-- DropTable
DROP TABLE `league_lefts`;

-- DropTable
DROP TABLE `league_permission_requests`;

-- DropTable
DROP TABLE `league_player_rank_logs`;

-- DropTable
DROP TABLE `league_players`;

-- DropTable
DROP TABLE `league_rankings`;

-- DropTable
DROP TABLE `league_requests`;

-- DropTable
DROP TABLE `league_rules`;

-- DropTable
DROP TABLE `league_session_players`;

-- DropTable
DROP TABLE `league_sessions`;

-- DropTable
DROP TABLE `leagues`;

-- DropTable
DROP TABLE `lms_inquiries`;

-- DropTable
DROP TABLE `lms_inquiry_details`;

-- DropTable
DROP TABLE `local_profile_claims`;

-- DropTable
DROP TABLE `messages`;

-- DropTable
DROP TABLE `migrations`;

-- DropTable
DROP TABLE `migrations_backup`;

-- DropTable
DROP TABLE `node_feature_logs`;

-- DropTable
DROP TABLE `notification_settings`;

-- DropTable
DROP TABLE `notifications`;

-- DropTable
DROP TABLE `organization_ranking_settings`;

-- DropTable
DROP TABLE `organization_rankings`;

-- DropTable
DROP TABLE `organization_tiers`;

-- DropTable
DROP TABLE `organizer_achievements`;

-- DropTable
DROP TABLE `organizer_contents`;

-- DropTable
DROP TABLE `organizer_galleries`;

-- DropTable
DROP TABLE `organizer_gallery_images`;

-- DropTable
DROP TABLE `organizer_team_members`;

-- DropTable
DROP TABLE `organizers`;

-- DropTable
DROP TABLE `other_services`;

-- DropTable
DROP TABLE `parent_childrens`;

-- DropTable
DROP TABLE `parents`;

-- DropTable
DROP TABLE `partner_docs`;

-- DropTable
DROP TABLE `partner_logs`;

-- DropTable
DROP TABLE `partner_notes`;

-- DropTable
DROP TABLE `password_reset_requests`;

-- DropTable
DROP TABLE `password_resets`;

-- DropTable
DROP TABLE `payment_accounts`;

-- DropTable
DROP TABLE `payment_transaction`;

-- DropTable
DROP TABLE `payments`;

-- DropTable
DROP TABLE `payouts`;

-- DropTable
DROP TABLE `personal_access_tokens`;

-- DropTable
DROP TABLE `phone_contacts`;

-- DropTable
DROP TABLE `platform_fees`;

-- DropTable
DROP TABLE `player_achievement_galleries`;

-- DropTable
DROP TABLE `player_achievement_verification_logs`;

-- DropTable
DROP TABLE `player_achievements`;

-- DropTable
DROP TABLE `player_aita_profile_logs`;

-- DropTable
DROP TABLE `player_aita_profiles`;

-- DropTable
DROP TABLE `player_aita_ranks`;

-- DropTable
DROP TABLE `player_all_rankings`;

-- DropTable
DROP TABLE `player_connection_match_requests`;

-- DropTable
DROP TABLE `player_connections`;

-- DropTable
DROP TABLE `player_invite`;

-- DropTable
DROP TABLE `player_itf_profiles`;

-- DropTable
DROP TABLE `player_itf_rankings`;

-- DropTable
DROP TABLE `player_matrix_featured_matches`;

-- DropTable
DROP TABLE `player_matrix_match_details`;

-- DropTable
DROP TABLE `player_matrix_matches`;

-- DropTable
DROP TABLE `player_matrix_teams`;

-- DropTable
DROP TABLE `player_profile_aita_verification_logs`;

-- DropTable
DROP TABLE `player_profile_local_verification_logs`;

-- DropTable
DROP TABLE `player_self_assessments`;

-- DropTable
DROP TABLE `player_seo_contents`;

-- DropTable
DROP TABLE `player_seo_templates`;

-- DropTable
DROP TABLE `player_social_media`;

-- DropTable
DROP TABLE `player_sports`;

-- DropTable
DROP TABLE `player_summary`;

-- DropTable
DROP TABLE `player_video_urls`;

-- DropTable
DROP TABLE `playing_information`;

-- DropTable
DROP TABLE `point_table_admin_logs`;

-- DropTable
DROP TABLE `point_table_logs`;

-- DropTable
DROP TABLE `program_services`;

-- DropTable
DROP TABLE `promotion_banners`;

-- DropTable
DROP TABLE `promotion_contacts`;

-- DropTable
DROP TABLE `recent_matches`;

-- DropTable
DROP TABLE `recent_matches_verification_logs`;

-- DropTable
DROP TABLE `recent_searches`;

-- DropTable
DROP TABLE `refund_bookings`;

-- DropTable
DROP TABLE `refunds`;

-- DropTable
DROP TABLE `registration_requests`;

-- DropTable
DROP TABLE `report_recent_match`;

-- DropTable
DROP TABLE `report_recent_match_logs`;

-- DropTable
DROP TABLE `report_recent_match_notes`;

-- DropTable
DROP TABLE `roles`;

-- DropTable
DROP TABLE `score`;

-- DropTable
DROP TABLE `sent_documents`;

-- DropTable
DROP TABLE `signup_requests`;

-- DropTable
DROP TABLE `sponsor_contents`;

-- DropTable
DROP TABLE `sponsor_customer_inquiry`;

-- DropTable
DROP TABLE `sponsor_customer_inquiry_log`;

-- DropTable
DROP TABLE `sponsor_customer_inquiry_notes`;

-- DropTable
DROP TABLE `sponsor_galleries`;

-- DropTable
DROP TABLE `sponsor_inquiries`;

-- DropTable
DROP TABLE `sponsor_inquiry_docs`;

-- DropTable
DROP TABLE `sponsor_inquiry_logs`;

-- DropTable
DROP TABLE `sponsor_inquiry_notes`;

-- DropTable
DROP TABLE `sponsor_locations`;

-- DropTable
DROP TABLE `sponsor_logs`;

-- DropTable
DROP TABLE `sponsor_owner_logs`;

-- DropTable
DROP TABLE `sponsor_owners`;

-- DropTable
DROP TABLE `sponsor_service_categories`;

-- DropTable
DROP TABLE `sponsors`;

-- DropTable
DROP TABLE `staff_details`;

-- DropTable
DROP TABLE `staff_draw`;

-- DropTable
DROP TABLE `state`;

-- DropTable
DROP TABLE `subscription_logs`;

-- DropTable
DROP TABLE `subscription_plan_perks`;

-- DropTable
DROP TABLE `subscription_plans`;

-- DropTable
DROP TABLE `subscriptions`;

-- DropTable
DROP TABLE `super_fcm_tokens`;

-- DropTable
DROP TABLE `super_role_permissions`;

-- DropTable
DROP TABLE `super_whatsapp_logs`;

-- DropTable
DROP TABLE `supers`;

-- DropTable
DROP TABLE `system_settings`;

-- DropTable
DROP TABLE `team_players`;

-- DropTable
DROP TABLE `team_spots`;

-- DropTable
DROP TABLE `template_languages`;

-- DropTable
DROP TABLE `templates`;

-- DropTable
DROP TABLE `tournament_age_groups`;

-- DropTable
DROP TABLE `tournament_categories`;

-- DropTable
DROP TABLE `tournament_decided_rounds`;

-- DropTable
DROP TABLE `tournament_details`;

-- DropTable
DROP TABLE `tournament_draw_matches`;

-- DropTable
DROP TABLE `tournament_draws`;

-- DropTable
DROP TABLE `tournament_event_courts`;

-- DropTable
DROP TABLE `tournament_event_venues`;

-- DropTable
DROP TABLE `tournament_events`;

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

-- DropTable
DROP TABLE `y_channels`;

-- DropTable
DROP TABLE `y_tokens`;

-- CreateTable
CREATE TABLE `ask_test_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ask_test_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `testname` VARCHAR(255) NOT NULL,
    `testage` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `ask_tournaments_country_id_key` ON `ask_tournaments`(`country_id`);

-- CreateIndex
CREATE UNIQUE INDEX `ask_tournaments_state_id_key` ON `ask_tournaments`(`state_id`);

-- CreateIndex
CREATE UNIQUE INDEX `ask_tournaments_city_id_key` ON `ask_tournaments`(`city_id`);

-- CreateIndex
CREATE INDEX `tournament_image_album_id` ON `tournament_galleries`(`tournament_galleries_folder_id`);

-- AddForeignKey
ALTER TABLE `academy_seo_contents` ADD CONSTRAINT `academy_seo_contents_academy_id_fkey` FOREIGN KEY (`academy_id`) REFERENCES `academies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `academy_amenities` ADD CONSTRAINT `academy_amenities_academy_id_fkey` FOREIGN KEY (`academy_id`) REFERENCES `academies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `academy_details` ADD CONSTRAINT `academy_details_academy_id_fkey` FOREIGN KEY (`academy_id`) REFERENCES `academies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `academy_timings` ADD CONSTRAINT `academy_timings_academy_id_fkey` FOREIGN KEY (`academy_id`) REFERENCES `academies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `academy_programs` ADD CONSTRAINT `academy_programs_academy_id_fkey` FOREIGN KEY (`academy_id`) REFERENCES `academies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `academy_coaches` ADD CONSTRAINT `academy_coaches_academy_id_fkey` FOREIGN KEY (`academy_id`) REFERENCES `academies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `academy_galleries` ADD CONSTRAINT `academy_galleries_academy_id_fkey` FOREIGN KEY (`academy_id`) REFERENCES `academies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `academy_achievements` ADD CONSTRAINT `academy_achievements_academy_id_fkey` FOREIGN KEY (`academy_id`) REFERENCES `academies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tournament_contents` ADD CONSTRAINT `tournament_contents_tournament_id_fkey` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ask_tournaments` ADD CONSTRAINT `ask_tournaments_country_id_fkey` FOREIGN KEY (`country_id`) REFERENCES `countries`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ask_tournaments` ADD CONSTRAINT `ask_tournaments_state_id_fkey` FOREIGN KEY (`state_id`) REFERENCES `states`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ask_tournaments` ADD CONSTRAINT `ask_tournaments_city_id_fkey` FOREIGN KEY (`city_id`) REFERENCES `cities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ask_tournaments` ADD CONSTRAINT `ask_tournaments_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `ask_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
