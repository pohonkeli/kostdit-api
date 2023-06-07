import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mst_kategori')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kategori_name: string;

  @Column()
  kategori_notes: string;

  @Column()
  created_by: string;

  @Column()
  created_date: Date;

  @Column()
  modified_by: string;

  @Column()
  modified_date: Date;

  @Column()
  is_used: boolean;

  @Column()
  is_active: boolean;
}
