CREATE DATABASE IF NOT EXISTS iGarden;

USE iGarden;

CREATE TABLE IF NOT EXISTS Monitor(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    IpAdress VARCHAR(100),
    Device VARCHAR(300),
    UserAgent VARCHAR(1000),
    Moisture DOUBLE,
    LectureTime DATETIME 
);

DROP PROCEDURE IF EXISTS usp_Monitor_Insert;
CREATE PROCEDURE usp_Monitor_Insert(IN ip VARCHAR(100),
                                    IN device VARCHAR(300),
                                    IN userAgent VARCHAR(1000),
                                    IN moisture DOUBLE,
                                    IN time DATETIME)
    INSERT INTO Monitor (IpAdress, Device, UserAgent, Moisture, LectureTime)
                 VALUES (ip, device, userAgent, moisture, time);

DROP PROCEDURE IF EXISTS usp_Monitor_Find;
CREATE PROCEDURE usp_Monitor_Find(IN id VARCHAR(100))
    SELECT Id, Device, UserAgent, Moisture, LectureTime 
    FROM Monitor
    wHERE Id = id;

DROP PROCEDURE IF EXISTS usp_Monitor_FindAll;
CREATE PROCEDURE usp_Monitor_FindAll()
    SELECT Id, Device, UserAgent, Moisture, LectureTime 
    FROM Monitor;

DROP PROCEDURE IF EXISTS usp_Monitor_FindAllByIp;
CREATE PROCEDURE usp_Monitor_FindAllByIp(IN ip VARCHAR(100))
    SELECT Id, Device, UserAgent, Moisture, LectureTime 
    FROM Monitor
    wHERE IpAdress = ip;