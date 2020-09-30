import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateEvents1601419799294 
implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'events',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true,
                        generationStrategy:'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name:'user_id',
                        type:'uuid',
                        isNullable: true
                    },
                    {
                        name:'name',
                        type:'varchar',
                    },
                    {
                        name:'local',
                        type:'varchar',
                    },
                    {
                        name:'photos',
                        type:'varchar',
                    },
                    {
                        name:'comment',
                        type:'varchar',
                    },
                ]
            })
        )

        await queryRunner.createForeignKey(
            'events',
            new TableForeignKey({
                columnNames:['user_id'],
                referencedColumnNames:['id'],
                referencedTableName:'users', 
                onDelete: 'SET NULL',
                onUpdate:'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('events');
    }
}
