import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryColumn({
        name: 'id',
        // Those types are not working:
        type: 'bigint'
        // type: 'int8'
        // type: 'decimal'
        // type: 'float4'

        // Those types are working fine:
        // type: 'float'
        // type: 'float8'
      })
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    age!: number;

}
