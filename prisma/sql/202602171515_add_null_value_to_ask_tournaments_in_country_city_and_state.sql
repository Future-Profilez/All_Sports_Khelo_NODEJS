ALTER TABLE `ask_tournaments` MODIFY `sport_id` CHAR(36) NOT NULL,
    MODIFY `description` VARCHAR(255) NULL,
    MODIFY `country_id` BIGINT UNSIGNED NULL,
    MODIFY `state_id` BIGINT UNSIGNED NULL,
    MODIFY `city_id` BIGINT UNSIGNED NULL;