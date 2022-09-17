CREATE SCHEMA `tutorial` ;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grade` int(11) NOT NULL,
  `display_name` varchar(20) NOT NULL,
  `full_name` varchar(30) NOT NULL,
  `school` varchar(100) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(45) NOT NULL,
  `intro` varchar(500) DEFAULT NULL,
  `interest_tags` varchar(500) DEFAULT NULL,
  `register_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `display_name_UNIQUE` (`display_name`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `course_info` varchar(2000) DEFAULT NULL,
  `video` varchar(200) DEFAULT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `course_tags` varchar(200) DEFAULT NULL,
  `course_status` tinyint(4) NOT NULL DEFAULT 1,
  `unit_price` decimal(4,2) DEFAULT 0.00,
  `picture1` longtext DEFAULT NULL,
  `picture2` longtext DEFAULT NULL,
  `picture3` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `course_subscribe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `is_archived` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `read_status` tinyint(4) DEFAULT 0,
  `content` varchar(500) NOT NULL,
  `sent_date` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `block_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `blocker_id` int(11) NOT NULL,
  `blocked_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `volunteer_information` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `raw_data` longtext DEFAULT NULL,
  `source_publish_time` timestamp NULL DEFAULT NULL,
  `crawel_time` timestamp NULL DEFAULT NULL,
  `last_update_time` timestamp NULL DEFAULT NULL,
  `publish_time` timestamp NULL DEFAULT NULL,
  `source_website_id` int(11) DEFAULT NULL,
  `source_url` varchar(500) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `images` varchar(2000) DEFAULT NULL,
  `region` varchar(200) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `map` varchar(300) DEFAULT NULL,
  `duration` varchar(200) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `contact` varchar(200) DEFAULT NULL,
  `categories` varchar(1000) DEFAULT NULL,
  `end_time` timestamp NULL DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `source_website` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `home_url` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `home_url_UNIQUE` (`home_url`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

