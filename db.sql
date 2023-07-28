CREATE TABLE `test`.`new_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(550) NULL DEFAULT NULL,
  `contact_info` VARCHAR(255) NOT NULL,
  `status` VARCHAR(45) NOT NULL DEFAULT 'Pending',
  `created_date` TIMESTAMP NOT NULL,
  `updated_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));