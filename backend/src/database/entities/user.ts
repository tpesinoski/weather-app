import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    @Exclude()
	id: string;

	@Column()
	name: string;

	@Column()
	lastname: string;

	@Column()
	email: string;

    @Column()
    @Exclude()
	password: string;
}