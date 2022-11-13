/*
  Warnings:

  - You are about to drop the column `postId` on the `Post` table. All the data in the column will be lost.
  - Added the required column `sentTo` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_postId_fkey";

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "sentTo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "postId",
ADD COLUMN     "authorId" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "photo" TEXT NOT NULL,
ALTER COLUMN "phone" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
