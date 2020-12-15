import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class users {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  peso: string;

  @Column()
  altura: string;

  @Column({ default: Date.now() })
  createdAt: string;

  @Column({ default: Date.now() })
  updatedAt: string;
}
