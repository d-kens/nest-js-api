import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column({ type: "enum", enum: ["men", "women", "children", "pets"] })
    category: string;

    @Column()
    stock: number;

    @Column()
    isAvailable: boolean;
}
