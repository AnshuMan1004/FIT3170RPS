import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8441062f-1395-4c44-b682-a5f9f4c3cd8e', '1Emile87@yahoo.com', 'David Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('97d404b7-a193-4565-bcb7-9099c50aa6a7', '7Ewald44@yahoo.com', 'Eva Green', 'https://i.imgur.com/YfJQV5z.png?id=9', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d1e016a9-f4f5-4bb5-b2fb-d13b05ee666a', '19Kenny10@yahoo.com', 'Bob Smith', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('f864cc69-cbc2-4e52-a75c-ae43299d18c1', '25Coty61@yahoo.com', 'Eva Green', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('096c153d-4a58-43f1-b6ff-63640633190f', '31Deondre20@hotmail.com', 'David Brown', 'https://i.imgur.com/YfJQV5z.png?id=33', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d97dd610-96ca-4a23-abaf-e70383897512', '37Quinton_Kuphal@yahoo.com', 'David Brown', 'https://i.imgur.com/YfJQV5z.png?id=39', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8d5d2b7a-9c64-44e4-95f4-5065e3783f92', '43Kristina.Renner@gmail.com', 'Cathy Lee', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('833d80ea-00c1-4fb5-953d-094a2daddf16', '49Earline_Osinski76@hotmail.com', 'David Brown', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('ff46fe6a-d46e-47cd-b9f4-4d7f1b9764f1', '55Kallie.Cruickshank@gmail.com', 'Bob Smith', 'https://i.imgur.com/YfJQV5z.png?id=57', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c66d43d7-37f8-4459-a3b7-098f823d5111', 'Match Invitation', 'Sorry you have been eliminated.', 'Match Coordinator', '64Chauncey.Blanda@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '8441062f-1395-4c44-b682-a5f9f4c3cd8e');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('bf56671b-9145-49c9-92f9-fe6a15646990', 'Tournament Update', 'New tournament starting soon. Join now', 'System Notification', '71Dasia.Casper@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d4817ac3-6ef9-4a6d-b100-9c4937372cb1', 'Tournament Update', 'Your next round opponent is ready. Tap to join.', 'Match Coordinator', '78Edmund30@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '8441062f-1395-4c44-b682-a5f9f4c3cd8e');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f34b98dd-caab-44b2-9dc0-8ec7b2816ade', 'Next Round Ready', 'You have been invited to a match. Accept the challenge', 'System Notification', '85Freeda59@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '833d80ea-00c1-4fb5-953d-094a2daddf16');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8c3bcd75-6e1e-47f8-8f1c-c901dc92c50b', 'Game Over', 'New tournament starting soon. Join now', 'System Notification', '92Maximilian.Cronin19@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '096c153d-4a58-43f1-b6ff-63640633190f');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5def26d0-7cf7-4bf1-bb17-217aee3bf68b', 'Tournament Update', 'New tournament starting soon. Join now', 'Match Coordinator', '99Monserrate_OKeefe47@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '97d404b7-a193-4565-bcb7-9099c50aa6a7');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c213c7c0-af41-4efe-b348-170d4a9820ad', 'Next Round Ready', 'Your next round opponent is ready. Tap to join.', 'Game Admin', '106Demond61@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('56eb56f5-fb47-403a-8d0f-8c807175e49f', 'Tournament Update', 'Congratulations You won the round.', 'System Notification', '113Justice.Hettinger94@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', 'd1e016a9-f4f5-4bb5-b2fb-d13b05ee666a');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d6b117f6-9da2-463c-bdd8-8a2c372bc248', 'Match Invitation', 'Sorry you have been eliminated.', 'RPS Challenge', '120Schuyler.Schulist93@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', 'ff46fe6a-d46e-47cd-b9f4-4d7f1b9764f1');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('75c9260b-cf79-4075-a17d-87a7606a374d', 'Match Invitation', 'Sorry you have been eliminated.', 'Game Admin', '127Lonzo.Marvin2@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "game" ("id", "status") VALUES ('97ec618e-9406-4135-a8ea-e7051795b015', 'waiting');
INSERT INTO "game" ("id", "status") VALUES ('fcbfc875-e17f-46ef-91f9-f35c7f87e2aa', 'cancelled');
INSERT INTO "game" ("id", "status") VALUES ('48687d8a-e2f6-42d9-8665-c20e64b73a66', 'completed');
INSERT INTO "game" ("id", "status") VALUES ('924306e6-4582-4926-8e5e-ad80db0bca4a', 'cancelled');
INSERT INTO "game" ("id", "status") VALUES ('c7464fcc-0610-4ab2-b322-8bc93985cfaa', 'cancelled');
INSERT INTO "game" ("id", "status") VALUES ('89e458b4-ecc5-42c3-89da-431ab606a850', 'cancelled');
INSERT INTO "game" ("id", "status") VALUES ('5302cb81-955a-4943-8ca1-cbaadf972355', 'cancelled');
INSERT INTO "game" ("id", "status") VALUES ('86c774d1-2c7f-4e9e-af5d-84d82753d52d', 'active');
INSERT INTO "game" ("id", "status") VALUES ('84fab92c-9b20-4095-ae07-8cbd6b94ef8c', 'active');
INSERT INTO "game" ("id", "status") VALUES ('9c0b78a8-f403-4a0a-b4b4-44a2110f9475', 'cancelled');

INSERT INTO "round" ("id", "roundNumber", "gameId") VALUES ('deb1df12-0010-4a94-aeb9-4ef19538d34e', 270, '84fab92c-9b20-4095-ae07-8cbd6b94ef8c');
INSERT INTO "round" ("id", "roundNumber", "gameId") VALUES ('bf96a2b6-2165-474e-8ec3-a6f000a5ffd9', 204, 'fcbfc875-e17f-46ef-91f9-f35c7f87e2aa');
INSERT INTO "round" ("id", "roundNumber", "gameId") VALUES ('9353d459-ac12-4a3e-a026-2e18069289a0', 615, '924306e6-4582-4926-8e5e-ad80db0bca4a');
INSERT INTO "round" ("id", "roundNumber", "gameId") VALUES ('67469c82-5aed-440c-9091-88a2cc23df86', 597, '924306e6-4582-4926-8e5e-ad80db0bca4a');
INSERT INTO "round" ("id", "roundNumber", "gameId") VALUES ('5b091a4f-b976-43e3-87f9-ad0e06a661ae', 148, 'fcbfc875-e17f-46ef-91f9-f35c7f87e2aa');
INSERT INTO "round" ("id", "roundNumber", "gameId") VALUES ('88e592e0-e623-49ed-aadf-70877784dc23', 48, '97ec618e-9406-4135-a8ea-e7051795b015');
INSERT INTO "round" ("id", "roundNumber", "gameId") VALUES ('4252c2c4-2831-4387-a1dc-2c91799dbeb6', 243, '84fab92c-9b20-4095-ae07-8cbd6b94ef8c');
INSERT INTO "round" ("id", "roundNumber", "gameId") VALUES ('a0f027c8-de2c-470c-946e-8f26b9af2f5a', 202, '97ec618e-9406-4135-a8ea-e7051795b015');
INSERT INTO "round" ("id", "roundNumber", "gameId") VALUES ('aff9ed41-00d8-42e6-b86d-9cdcf93f41c3', 486, '84fab92c-9b20-4095-ae07-8cbd6b94ef8c');
INSERT INTO "round" ("id", "roundNumber", "gameId") VALUES ('b572fbec-20c9-4af7-a2f0-8a264003cbec', 658, '9c0b78a8-f403-4a0a-b4b4-44a2110f9475');

INSERT INTO "player" ("id", "userId", "gameId") VALUES ('0409d94c-44dd-4c71-9472-ffd65f7670a6', '833d80ea-00c1-4fb5-953d-094a2daddf16', '48687d8a-e2f6-42d9-8665-c20e64b73a66');
INSERT INTO "player" ("id", "userId", "gameId") VALUES ('123a3cc0-543c-404a-bb9f-7dae1cea5258', 'd1e016a9-f4f5-4bb5-b2fb-d13b05ee666a', '86c774d1-2c7f-4e9e-af5d-84d82753d52d');
INSERT INTO "player" ("id", "userId", "gameId") VALUES ('038e295f-94bc-4dbd-b7dd-c4d24ef49647', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '9c0b78a8-f403-4a0a-b4b4-44a2110f9475');
INSERT INTO "player" ("id", "userId", "gameId") VALUES ('40a2e6a2-0625-4518-b8c5-6d3c3909b3e0', 'd97dd610-96ca-4a23-abaf-e70383897512', '97ec618e-9406-4135-a8ea-e7051795b015');
INSERT INTO "player" ("id", "userId", "gameId") VALUES ('07a036ea-f481-453f-8d62-01aab8fa6772', 'ff46fe6a-d46e-47cd-b9f4-4d7f1b9764f1', '5302cb81-955a-4943-8ca1-cbaadf972355');
INSERT INTO "player" ("id", "userId", "gameId") VALUES ('abe8a687-f508-44c6-8688-2d124875d037', '8d5d2b7a-9c64-44e4-95f4-5065e3783f92', 'fcbfc875-e17f-46ef-91f9-f35c7f87e2aa');
INSERT INTO "player" ("id", "userId", "gameId") VALUES ('c59da224-f4de-4da9-94ab-29bae064b0fa', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '86c774d1-2c7f-4e9e-af5d-84d82753d52d');
INSERT INTO "player" ("id", "userId", "gameId") VALUES ('50b810d8-5c3e-4ebe-b5bb-636f858a09ea', 'd97dd610-96ca-4a23-abaf-e70383897512', '48687d8a-e2f6-42d9-8665-c20e64b73a66');
INSERT INTO "player" ("id", "userId", "gameId") VALUES ('583c9bde-a5b5-4792-a2c9-4cbdae1bf215', 'd97dd610-96ca-4a23-abaf-e70383897512', 'c7464fcc-0610-4ab2-b322-8bc93985cfaa');
INSERT INTO "player" ("id", "userId", "gameId") VALUES ('5f5c2040-641b-49ce-8b43-8fb502ffbdb8', 'd1e016a9-f4f5-4bb5-b2fb-d13b05ee666a', '5302cb81-955a-4943-8ca1-cbaadf972355');

INSERT INTO "choice" ("id", "choice", "playerId", "roundId") VALUES ('1197e7cf-a9e8-4dd1-bcc2-7c127eb85b6f', 'Rock', '40a2e6a2-0625-4518-b8c5-6d3c3909b3e0', 'a0f027c8-de2c-470c-946e-8f26b9af2f5a');
INSERT INTO "choice" ("id", "choice", "playerId", "roundId") VALUES ('ce398188-6bee-4e9a-864a-dd434c36a21a', 'Paper', '038e295f-94bc-4dbd-b7dd-c4d24ef49647', 'bf96a2b6-2165-474e-8ec3-a6f000a5ffd9');
INSERT INTO "choice" ("id", "choice", "playerId", "roundId") VALUES ('909900bd-7c18-43cc-84df-534811974654', 'Paper', '038e295f-94bc-4dbd-b7dd-c4d24ef49647', 'aff9ed41-00d8-42e6-b86d-9cdcf93f41c3');
INSERT INTO "choice" ("id", "choice", "playerId", "roundId") VALUES ('715566fe-81c4-4ffb-8fc6-f759575dfd3b', 'Rock', '0409d94c-44dd-4c71-9472-ffd65f7670a6', 'a0f027c8-de2c-470c-946e-8f26b9af2f5a');
INSERT INTO "choice" ("id", "choice", "playerId", "roundId") VALUES ('b8a1d199-294f-4a61-b0d8-bcecf5c45c41', 'Rock', 'abe8a687-f508-44c6-8688-2d124875d037', '4252c2c4-2831-4387-a1dc-2c91799dbeb6');
INSERT INTO "choice" ("id", "choice", "playerId", "roundId") VALUES ('36fc4ee6-abdb-4988-ba80-ffd76482438a', 'Paper', 'c59da224-f4de-4da9-94ab-29bae064b0fa', '4252c2c4-2831-4387-a1dc-2c91799dbeb6');
INSERT INTO "choice" ("id", "choice", "playerId", "roundId") VALUES ('5ff61b03-6e5f-42bf-bc42-62a9205b02a0', 'Scissors', '07a036ea-f481-453f-8d62-01aab8fa6772', 'bf96a2b6-2165-474e-8ec3-a6f000a5ffd9');
INSERT INTO "choice" ("id", "choice", "playerId", "roundId") VALUES ('437b6149-8aac-45c2-9b54-a1c032421e43', 'Paper', '0409d94c-44dd-4c71-9472-ffd65f7670a6', '88e592e0-e623-49ed-aadf-70877784dc23');
INSERT INTO "choice" ("id", "choice", "playerId", "roundId") VALUES ('36ba51a1-66f2-4fe2-a833-675a84252aae', 'Rock', '123a3cc0-543c-404a-bb9f-7dae1cea5258', '88e592e0-e623-49ed-aadf-70877784dc23');
INSERT INTO "choice" ("id", "choice", "playerId", "roundId") VALUES ('648a8ce3-e233-4e62-bf5f-fa382ef748b0', 'Scissors', '50b810d8-5c3e-4ebe-b5bb-636f858a09ea', '9353d459-ac12-4a3e-a026-2e18069289a0');

INSERT INTO "result" ("id", "resultType", "roundId", "winnerPlayerId") VALUES ('c9ed3b96-8de8-4685-a794-a3565fc21b15', 'Win', '9353d459-ac12-4a3e-a026-2e18069289a0', '40a2e6a2-0625-4518-b8c5-6d3c3909b3e0');
INSERT INTO "result" ("id", "resultType", "roundId", "winnerPlayerId") VALUES ('a72e3d30-262a-4665-8341-5725c0f4b698', 'Loss', 'a0f027c8-de2c-470c-946e-8f26b9af2f5a', '0409d94c-44dd-4c71-9472-ffd65f7670a6');
INSERT INTO "result" ("id", "resultType", "roundId", "winnerPlayerId") VALUES ('b3986551-b312-4058-a747-b44e1589c742', 'Win', '5b091a4f-b976-43e3-87f9-ad0e06a661ae', 'c59da224-f4de-4da9-94ab-29bae064b0fa');
INSERT INTO "result" ("id", "resultType", "roundId", "winnerPlayerId") VALUES ('8ca71435-1437-4856-b3c5-f7e856b64986', 'Win', '67469c82-5aed-440c-9091-88a2cc23df86', 'abe8a687-f508-44c6-8688-2d124875d037');
INSERT INTO "result" ("id", "resultType", "roundId", "winnerPlayerId") VALUES ('0e40642e-9e04-47b1-87a2-0dd9ff9ae7d7', 'Loss', 'aff9ed41-00d8-42e6-b86d-9cdcf93f41c3', 'abe8a687-f508-44c6-8688-2d124875d037');
INSERT INTO "result" ("id", "resultType", "roundId", "winnerPlayerId") VALUES ('772550a6-b33c-49b0-8287-3380b628b9a4', 'Loss', '88e592e0-e623-49ed-aadf-70877784dc23', '0409d94c-44dd-4c71-9472-ffd65f7670a6');
INSERT INTO "result" ("id", "resultType", "roundId", "winnerPlayerId") VALUES ('93e16af8-8b90-4b40-aeb4-1155a29af8da', 'Loss', '67469c82-5aed-440c-9091-88a2cc23df86', '50b810d8-5c3e-4ebe-b5bb-636f858a09ea');
INSERT INTO "result" ("id", "resultType", "roundId", "winnerPlayerId") VALUES ('4372f382-a04d-4835-a31d-ae989606b8e6', 'Win', '67469c82-5aed-440c-9091-88a2cc23df86', '038e295f-94bc-4dbd-b7dd-c4d24ef49647');
INSERT INTO "result" ("id", "resultType", "roundId", "winnerPlayerId") VALUES ('1b3405e5-ca52-49c6-b246-3613ab82fab1', 'Win', 'a0f027c8-de2c-470c-946e-8f26b9af2f5a', '123a3cc0-543c-404a-bb9f-7dae1cea5258');
INSERT INTO "result" ("id", "resultType", "roundId", "winnerPlayerId") VALUES ('f8452f20-5e20-48f6-8818-cceb373ab9a9', 'Loss', '9353d459-ac12-4a3e-a026-2e18069289a0', '07a036ea-f481-453f-8d62-01aab8fa6772');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
