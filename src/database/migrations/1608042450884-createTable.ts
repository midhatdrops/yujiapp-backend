import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createTable1608042450884 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "INTEGER",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "TEXT NOT NULL",
          },
          {
            name: "peso",
            type: "TEXT NOT NULL",
          },
          {
            name: "altura",
            type: "TEXT NOT NULL",
          },
          {
            name: "CreateAt",
            type: "TEXT NULL",
            default: "datetime('now')",
          },
          {
            name: "UpdatedAt",
            type: "TEXT NULL",
            default: "datetime('now')",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
