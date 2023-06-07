import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'mst_fasilitas' })
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'fasilitas_name' })
  fasilitasName: string;

  @Column({ name: 'fasilitas_price' })
  fasilitasPrice: number;

  @Column({ name: 'fasilitas_notes' })
  fasilitasNotes: string;

  @Column({ name: 'created_by' })
  createdBy: string;

  @Column({ name: 'created_date' })
  createdDate: Date;

  @Column({ name: 'modified_by' })
  modifiedBy: string;

  @Column({ name: 'modified_date' })
  modifiedDate: Date;

  @Column({ name: 'is_used' })
  isUsed: boolean;

  @Column({ name: 'is_active' })
  isActive: boolean;
}
