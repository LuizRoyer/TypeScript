import { Artist } from 'src/artists/artist.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('songs')
export class Songs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Artist, (artist) => artist.songs, { cascade: true })
  @JoinTable({ name: 'songs_artists' })
  artists: Artist[];

  @Column('date')
  releasedDate: Date;

  @Column('time')
  duration: Date;
}
