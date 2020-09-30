import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class LikeDeslike1601423538440 
implements MigrationInterface {

        public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.addColumn(
                'events',
                new TableColumn({
                        name:'like',
                        type:'number',
                })
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('like');
    }

}
