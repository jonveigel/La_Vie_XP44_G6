CREATE DATABASE  IF NOT EXISTS `la_vie2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `la_vie2`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: la_vie
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_patient` varchar(100) NOT NULL,
  `born` date NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1,'Patient 1','1987-06-19','patient1@gmail.com'),(2,'Patient 2','1960-05-19','patient2@gmail.com'),(3,'Patient 3','1967-11-11','patient3@gmail.com'),(4,'Pacient 4','1998-05-13','eduardo@hotmail.com'),(5,'Patient 5','2000-04-01','patient5@gmail.com'),(6,'Patient 20','2001-05-08','patient20@gmail.com'),(7,'Patient 21','2011-03-07','patient21@gmail.com'),(9,'Patient 22','1986-08-09','patient22@gmail.com'),(10,'Patient 23','1991-02-08','patient23@gmail.com'),(11,'Patient 24','1997-05-11','patient24@gmail.com'),(12,'Patient 25','2011-01-01','patient25@gmail.com'),(13,'Patient 26','2004-12-09','patient26@gmail.com'),(14,'Patient 27','1985-05-23','patient27@gmail.com'),(15,'Patient 28','1999-12-12','patient28@gmail.com'),(16,'Patient 29a','1981-11-11','patient29a@gmail.com'),(17,'Patient 29','1988-12-12','patient29@gmail.com'),(18,'Patient 30','2004-06-06','patient30@gmail.com'),(19,'Patient 31','2008-08-08','patient31@gmail.com'),(20,'Patient 32','1977-01-10','patient32@gmail.com');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `psycho`
--

DROP TABLE IF EXISTS `psycho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psycho` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_psycho` varchar(100) NOT NULL,
  `email_psycho` varchar(100) NOT NULL,
  `pass` varchar(200) DEFAULT NULL,
  `presentation` varchar(800) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psycho`
--

LOCK TABLES `psycho` WRITE;
/*!40000 ALTER TABLE `psycho` DISABLE KEYS */;
INSERT INTO `psycho` VALUES (1,'Psycho 1','psycho1@gmail.com','$2b$10$SsQKymvT2fN5dNBn9mZF9eyKsYFyBrLD4q31aRjcm5cTFLNhgZUdu','Hello World!(1).'),(2,'Psycho 2','psycho2@gmail.com','$2b$10$OVoW4vqmKzUAnOseGkIDbu9f8ZXPR1Qet1DDI1jOZcqNe/hI3mGbG','Hello World!(2).'),(3,'Psycho 3','psycho3@gmail.com','$2b$10$OTWkgcWMCr0P.2v4J63CWuZ/N4rppcYIRYsCKVdNAGdJMxPnZ8nee','Hello World!(3).'),(4,'Psycho 4','psycho4@gmail.com','$2b$10$i0jA1rvM6IDd8Uqy7IkpduXH2H.3xmgXn2HVKZ42ezdjO9tjJAGV.','Hello World!(4).'),(5,'Psycho 5','psycho5@gmail.com','$2b$10$uSQaxIro5Nc0i7tz8FuhkuZ9zq4EQMyX6dcoYusftQhW6mlSdVK0G','Hello World!(5).'),(6,'Psycho 6','psycho6@gmail.com','$2b$10$pwkM.K2qXuqT.qhCeAF8gu81PJbHU1IrLpEnVKQfOfYRmGf27nXVi','Hello World!(6).'),(7,'Psycho 7','psycho7@gmail.com','$2b$10$PXj/W1YMIz.0G/UXCtrm2usVxeS1GjprTX2t57UQL03GIFHnPb3FS','Hello World!(7).'),(8,'Psycho 8','psycho8@gmail.com','$2b$10$iAPyNGOe/misf1wkQ4aQPe5rmc7/ZcFREra6nReEpkYo8wUqQTloS','Hello World!(8).'),(9,'Psycho 9','psycho9@gmail.com','$2b$10$hhPcR34oJXCOf/FSiQGxiOXZL5FHP5I5Hly/QtV/7IWqrXnsbYmVe','Hello World!(9).'),(10,'Psycho 10','psycho10@gmail.com','$2b$10$cYkr0KH1W33pI4q0jcUbaOlVn9jQLCxgtauckC3GRwQYNvpcgJOZO','Hello World!(10).'),(11,'Psycho 11','psycho11@gmail.com','$2b$10$bdRJC2x2SPzHZKaO.dO7.e7wQaQdEOOFPBABRG0neogoOjN3D2uK2','Hello World!(11).'),(12,'Psycho 12','psycho12@gmail.com','$2b$10$9eES1swX.NcFm3T2RFL5WOpUMNk/gytFBwf9.8co6PSnb0wbaucHq','Hello World!(12).'),(13,'Psycho 13','psycho13@gmail.com','$2b$10$.DY4ac64mTsnw1jn5aMNCurl2WRLQAuvZO2skS823afx3tdpb0LnC','Hello World!(13).'),(14,'Psycho 14','psycho14@gmail.com','$2b$10$POPsHZgiGOIjZAmMHasDPuOSVjDYgS0FgZec7M0/ghZ4kZnKjGFM6','Hello World!(14).'),(15,'Psycho 15','psycho15@gmail.com','$2b$10$.eY3LVlx.ywSSkNarUPlyuAA5yOLOZbhre3FbbpSwm9ejDHVnGCYS','Hello World!(15).');
/*!40000 ALTER TABLE `psycho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id` int NOT NULL,
  `psycho_id` int NOT NULL,
  `service_date` date NOT NULL,
  `note` varchar(800) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_patient_id` (`patient_id`),
  KEY `FK_psycho_id` (`psycho_id`),
  CONSTRAINT `FK_patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_psycho_id` FOREIGN KEY (`psycho_id`) REFERENCES `psycho` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (2,2,1,'2022-10-20','Hello World!(services(2)).'),(3,3,2,'2022-11-14','Paciente com doença mental severa (causa: JavaScript');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-14 21:52:34
