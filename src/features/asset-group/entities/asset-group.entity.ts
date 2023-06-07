import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'mst_asset_group' })
export class AssetGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'asset_group_name' })
  assetGroupName: string;

  @Column({ name: 'asset_group_location' })
  assetGroupLocation: string;

  @Column({ name: 'asset_group_notes' })
  assetGroupNotes: string;

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
