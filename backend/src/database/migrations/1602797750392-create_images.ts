import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602797750392 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
        name:'Images',
        columns: [
          {
            name:'id',
            type:'integer',
            unsigned:true,
            isPrimary:true,
            isGenerated:true,
            generationStrategy: 'increment'
          },
          {
            name:'path',
            type:'varchar'
          },
          {
            name:'orphanages_id',
            type:'integer'
          }
        ],
        foreignKeys:[
          {
            name:'ImageOrphanage',
            columnNames:['orphanages_id'],
            referencedTableName:'Orphanage',
            referencedColumnNames:['id'],
            onUpdate:'CASCADE',
            onDelete:'CASCADE'
          }
        ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Images');
  }

}
