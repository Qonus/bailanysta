ALTER TABLE "posts" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "id" DROP IDENTITY;--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN "likes";