import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { WorksModule } from './modules/works/works.module';

@Module({
  // https://getpino.io
  // https://github.com/iamolegga/nestjs-pino
  // LoggerModule.forRoot(loggerOptions),
  // Configuration
  // https://docs.nestjs.com/techniques/configuration
  // ConfigModule.forRoot({
  // 	isGlobal: true,
  // 	load: [configuration],
  // }),
  // Database
  // https://docs.nestjs.com/techniques/database
  // TypeOrmModule.forRootAsync({
  // 	useFactory: (config: ConfigService) => ({
  // 		...config.get<TypeOrmModuleOptions>('db'),
  // 	}),
  // 	inject: [ConfigService],
  // }),
  imports: [
    // Service Module
    WorksModule,
    // Module Router
    RouterModule.register([
      {
        path: 'health',
        module: WorksModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
