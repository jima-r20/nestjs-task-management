import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TakskController } from './taksk/taksk.controller';

@Module({
  imports: [TasksModule],
  controllers: [TakskController],
})
export class AppModule {}
