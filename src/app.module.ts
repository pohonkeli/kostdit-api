import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './features/category/category.module';
import { FacilityModule } from './features/facility/facility.module';
import { AssetGroupModule } from './features/asset-group/asset-group.module';
import { Category } from './features/category/entities/category.entity';
import { Facility } from './features/facility/entities/facility.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.dev.env',
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        autoLoadEntities: true,
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        synchronize: false, //false in untuk nonaktif migrasi
        entities: [Category, Facility],
        logging: false,
      }),
      inject: [ConfigService],
    }),
    CategoryModule,
    FacilityModule,
    AssetGroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
