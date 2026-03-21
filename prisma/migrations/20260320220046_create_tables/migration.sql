/*
  Warnings:

  - You are about to drop the `UserSerie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserSerie" DROP CONSTRAINT "UserSerie_serie_id_fkey";

-- DropForeignKey
ALTER TABLE "UserSerie" DROP CONSTRAINT "UserSerie_user_id_fkey";

-- DropTable
DROP TABLE "UserSerie";

-- CreateTable
CREATE TABLE "userSerie" (
    "id" TEXT NOT NULL,
    "assistido" BOOLEAN NOT NULL DEFAULT false,
    "favorito" BOOLEAN NOT NULL DEFAULT false,
    "nota" INTEGER,
    "user_id" TEXT NOT NULL,
    "serie_id" TEXT NOT NULL,

    CONSTRAINT "userSerie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userSerie" ADD CONSTRAINT "userSerie_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userSerie" ADD CONSTRAINT "userSerie_serie_id_fkey" FOREIGN KEY ("serie_id") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
