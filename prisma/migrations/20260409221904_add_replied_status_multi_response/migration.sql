-- AlterEnum
ALTER TYPE "InquiryStatus" ADD VALUE 'REPLIED';

-- DropIndex
DROP INDEX "InquiryResponse_inquiryId_key";
