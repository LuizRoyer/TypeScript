import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { PlaylistModule } from './playlist/playlist.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './playlist/entities/playlist.entity';
import { Songs } from './songs/entities/songs.entity';
import { Artist } from './artists/artist.entity';
import { User } from './users/user.entity';
import { UserModule } from './users/user.modules';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.URL_CONNECTION,
      entities: [Playlist, Songs, Artist, User],
      synchronize: true,
    }),

    SongsModule,
    PlaylistModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}
