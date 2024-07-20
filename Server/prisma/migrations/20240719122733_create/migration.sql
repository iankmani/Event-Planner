-- CreateTable
CREATE TABLE "Users_Table" (
    "id" TEXT NOT NULL,
    "First_Name" TEXT NOT NULL,
    "Last_Name" TEXT NOT NULL,
    "Email_Address" TEXT NOT NULL,
    "Phone_Number" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_Table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_Table_Email_Address_key" ON "Users_Table"("Email_Address");
