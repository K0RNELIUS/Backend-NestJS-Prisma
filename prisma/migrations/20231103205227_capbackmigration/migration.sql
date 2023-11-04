-- CreateTable
CREATE TABLE "TASK" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "labelId" INTEGER,

    CONSTRAINT "TASK_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LABEL" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "LABEL_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TASK" ADD CONSTRAINT "TASK_labelId_fkey" FOREIGN KEY ("labelId") REFERENCES "LABEL"("id") ON DELETE SET NULL ON UPDATE CASCADE;
