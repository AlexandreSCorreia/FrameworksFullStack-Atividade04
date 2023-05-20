CREATE DATABASE db_ac4;

USE db_ac4;

CREATE TABLE news(
      id smallint AUTO_INCREMENT
    , titulo varchar(150) NOT NULL
    , imagem varchar(255) NOT NULL
    , tipo bit NOT NULL
    , PRIMARY KEY (id)
);

INSERT INTO news (titulo,imagem,tipo) VALUES
("ANALYSIS: Why the Shonen Jump's Dark Trinity are the new Big Three of anime", "https://img1.ak.crunchyroll.com/i/spire2/4553d4914f4afb618fe91046061578901681945204_thumb.jpg", 0),
("Crunchyroll release calendar for the week of May 1st to 7th", "https://img1.ak.crunchyroll.com/i/spire4/9d7be9ff16affa3953db7b1c28553a871682346184_thumb.png", 0);

INSERT INTO news (titulo, imagem, tipo) VALUES
("Demon Slayer: Kimetsu no Yaiba and Chainsaw Man to get complete collection boxes by Panini", "https://img1.ak.crunchyroll.com/i/spire4/3701f78b1b4044ae0c8422f9fe32d49a1683106241_thumb.jpg", 1),
("Berserk to be published again in July by Panini", "https://img1.ak.crunchyroll.com/i/spire2/eba652c53572ed550274522697ee3f041683104336_thumb.jpg", 1),
("Miraculous: Ladybug and Cat Noir to be published in July by Panini", "https://img1.ak.crunchyroll.com/i/spire4/eb57788f4c9579bba4c2e8f3f300a9981683102072_thumb.png", 1),
("Speed up with the new trailer and poster of Gran Turismo live-action movie", "https://img1.ak.crunchyroll.com/i/spire2/7fb7ae8e18ca7bdc5dfd90b1c67508101683060681_thumb.jpg", 1),
("Elden Ring artbooks to be released in July by Panini", "https://img1.ak.crunchyroll.com/i/spire4/55c46275e823844e9b2abfe5d57f81831683101407_thumb.png", 1),
("Saint Seiya: The Beginning, the movie of Knights of the Zodiac, premieres in the top 3 of Brazilian cinemas", "https://img1.ak.crunchyroll.com/i/spire3/52948da327b65dd9f745f3d5e24ce4721683073772_thumb.jpg", 1);