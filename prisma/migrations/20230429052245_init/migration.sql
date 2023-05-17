-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leader" (
    "id" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "party" TEXT NOT NULL,
    "leaning" INTEGER NOT NULL,
    "tookOffice" TIMESTAMP(3) NOT NULL,
    "leftOffice" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Leader_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Leader" ADD CONSTRAINT "Leader_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
