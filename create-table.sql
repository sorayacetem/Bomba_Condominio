-- MySQL Script generated by MySQL Workbench
-- Fri Feb  3 09:09:08 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pesa_agua
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pesa_agua
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pesa_agua` DEFAULT CHARACTER SET utf8mb4 ;
USE `pesa_agua` ;

-- -----------------------------------------------------
-- Table `pesa_agua`.`manutencoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pesa_agua`.`manutencoes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(255) NULL DEFAULT NULL,
  `data` DATETIME NULL DEFAULT NULL,
  `executada` TINYINT(1) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `pesa_agua`.`operadores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pesa_agua`.`operadores` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `pesa_agua`.`registros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pesa_agua`.`registros` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `lote` VARCHAR(255) NULL DEFAULT NULL,
  `setpoint` FLOAT NULL DEFAULT NULL,
  `operador` VARCHAR(255) NULL DEFAULT NULL,
  `inicio_pesagem` DATETIME NULL DEFAULT NULL,
  `fim_pesagem` DATETIME NULL DEFAULT NULL,
  `peso_real` FLOAT NULL DEFAULT NULL,
  `observacao` VARCHAR(100) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
