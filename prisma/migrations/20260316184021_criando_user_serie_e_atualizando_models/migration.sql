/*
  Warnings:

  - You are about to drop the column `Assistido` on the `Series` table. All the data in the column will be lost.
  - You are about to drop the column `nota` on the `Series` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Series" DROP COLUMN "Assistido",
DROP COLUMN "nota";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "imagem" DROP NOT NULL;

-- CreateTable
CREATE TABLE "UserSerie" (
    "id" TEXT NOT NULL,
    "assistido" BOOLEAN NOT NULL DEFAULT false,
    "favorito" BOOLEAN NOT NULL DEFAULT false,
    "nota" INTEGER,
    "user_id" TEXT NOT NULL,
    "serie_id" TEXT NOT NULL,

    CONSTRAINT "UserSerie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSerie_user_id_serie_id_key" ON "UserSerie"("user_id", "serie_id");

-- AddForeignKey
ALTER TABLE "UserSerie" ADD CONSTRAINT "UserSerie_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSerie" ADD CONSTRAINT "UserSerie_serie_id_fkey" FOREIGN KEY ("serie_id") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
