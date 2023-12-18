import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsersTable1702425064369 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            unsigned: true,
            generationStrategy: 'increment'
          },
          {
            name: 'username',
            type: 'varchar(100)'
          },
          {
            name: 'surname',
            type: 'varchar(100)'
          },
          {
            name: 'phone',
            type: 'varchar(20)'
          },
          {
            name: 'email',
            type: 'varchar(100)',
            isUnique: true
          },
          {
            name: 'pswd',
            type: 'varchar(255)'
          },
          {
            name: 'postalCode',
            type: 'varchar(10)'
          },
          {
            name: 'name',
            type: 'varchar(100)'
          },
          {
            name: 'street',
            type: 'varchar(100)'
          },
          {
            name: 'locality',
            type: 'varchar(100)'
          },
          {
            name: 'country',
            type: 'varchar(100)'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP(6)'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP(6)'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
