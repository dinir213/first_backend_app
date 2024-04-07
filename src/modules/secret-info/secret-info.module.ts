import { Module } from '@nestjs/common';
import { SecretInfoController } from './secret-info.controller';
import { SecretInfoService } from './secret-info.service';

@Module({
  controllers: [SecretInfoController],
  providers: [SecretInfoService]
})
export class SecretInfoModule {}
