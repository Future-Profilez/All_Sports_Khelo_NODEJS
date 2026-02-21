ALTER TABLE `ask_tournaments` MODIFY `sport_id` VARCHAR(100) NOT NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `country_id` BIGINT UNSIGNED NULL,
    MODIFY `state_id` BIGINT UNSIGNED NULL,
    MODIFY `city_id` BIGINT UNSIGNED NULL;