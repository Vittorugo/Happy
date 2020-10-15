import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrfanato1602767350286 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'Orphanage',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    isPrimary:true,
                    unsigned:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'name',
                    type:'varchar'
                },
                {
                    name:'latitude',
                    type:'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name:'longitude',
                    type:'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name:'about',
                    type:'text'
                },
                {
                    name:'instruction',
                    type:'text'
                },
                {
                    name:'opening_hours',
                    type:'varchar'
                },
                {
                    name:'open_on_weekends',
                    type:'boolean',
                    default:false   
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Orphanage');
    }

}
