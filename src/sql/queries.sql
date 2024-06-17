create schema bd_progreso;

CREATE TABLE `tbl_privileges` (
  `priv_id` int NOT NULL AUTO_INCREMENT,
  `priv_name` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`priv_id`)
);

CREATE TABLE `tbl_degree` (
  `deg_id` int NOT NULL AUTO_INCREMENT,
  `deg_name` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`deg_id`)
);

CREATE TABLE `tbl_subject` (
  `sbj_id` int NOT NULL AUTO_INCREMENT,
  `sbj_name` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`sbj_id`)
);

CREATE TABLE `tbl_user` (
  `usr_id` int NOT NULL AUTO_INCREMENT,
  `usr_name` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `usr_surname` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `usr_username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `usr_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `usr_email` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  `usr_phone` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `usr_dpi` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `usr_privileges` int NOT NULL,
  `usr_image` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `usr_status` int NOT NULL,
  PRIMARY KEY (`usr_id`),
  KEY `usr_privileges` (`usr_privileges`),
  CONSTRAINT `tbl_user_ibfk_1` FOREIGN KEY (`usr_privileges`) REFERENCES `tbl_privileges` (`priv_id`)
);

CREATE TABLE `tbl_class` (
  `cls_id` int NOT NULL AUTO_INCREMENT,
  `cls_degree` int NOT NULL,
  `cls_teacher` int NOT NULL,
  `cls_subject` int NOT NULL,
  PRIMARY KEY (`cls_id`),
  KEY `cls_degree` (`cls_degree`),
  KEY `cls_teacher` (`cls_teacher`),
  KEY `cls_subject` (`cls_subject`),
  CONSTRAINT `tbl_class_ibfk_1` FOREIGN KEY (`cls_degree`) REFERENCES `tbl_degree` (`deg_id`),
  CONSTRAINT `tbl_class_ibfk_2` FOREIGN KEY (`cls_teacher`) REFERENCES `tbl_user` (`usr_id`),
  CONSTRAINT `tbl_class_ibfk_3` FOREIGN KEY (`cls_subject`) REFERENCES `tbl_subject` (`sbj_id`)
) ;

CREATE TABLE `archivos_pdf` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `contenido` longblob NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_clase` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_clase`) REFERENCES `tbl_class` (`cls_id`) ON DELETE CASCADE
);

CREATE TABLE `permission codes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `tbl_activities` (
  `act_id` int NOT NULL AUTO_INCREMENT,
  `act_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `act_description` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `act_date` date NOT NULL,
  PRIMARY KEY (`act_id`)
);

CREATE TABLE `tbl_act_images` (
  `img_id` int NOT NULL AUTO_INCREMENT,
  `img_src` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `img_id_act` int NOT NULL,
  PRIMARY KEY (`img_id`),
  KEY `img_id_act` (`img_id_act`),
  CONSTRAINT `tbl_act_images_ibfk_1` FOREIGN KEY (`img_id_act`) REFERENCES `tbl_activities` (`act_id`)
);






CREATE TABLE `tbl_session_token` (
  `stk_id` int NOT NULL AUTO_INCREMENT,
  `stk_value` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `stk_id_user` int NOT NULL,
  PRIMARY KEY (`stk_id`),
  KEY `stk_id_user` (`stk_id_user`),
  CONSTRAINT `tbl_session_token_ibfk_1` FOREIGN KEY (`stk_id_user`) REFERENCES `tbl_user` (`usr_id`)
);

