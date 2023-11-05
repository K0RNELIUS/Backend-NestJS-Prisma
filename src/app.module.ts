import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { LabelModule } from './label/label.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TaskModule, LabelModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
