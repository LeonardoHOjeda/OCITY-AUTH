import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsersRoleTable1702425073713 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_roles',
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
            name: 'user_id',
            type: 'integer',
            unsigned: true
          },
          {
            name: 'role_id',
            type: 'integer',
            unsigned: true
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
        ],
        foreignKeys: [
          {
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'cascade',
            onUpdate: 'cascade'
          },
          {
            columnNames: ['role_id'],
            referencedTableName: 'roles',
            referencedColumnNames: ['id'],
            onDelete: 'cascade',
            onUpdate: 'cascade'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
