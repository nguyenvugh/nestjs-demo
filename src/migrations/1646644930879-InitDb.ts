import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDb1646644930879 implements MigrationInterface {
  name = 'InitDb1646644930879';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "email" ADD CONSTRAINT "PK_1e7ed8734ee054ef18002e29b1c" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "email" ALTER COLUMN "email" SET NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "email" DROP COLUMN "created_at"`);
    await queryRunner.query(
      `ALTER TABLE "email" ADD "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "email" DROP COLUMN "created_at"`);
    await queryRunner.query(`ALTER TABLE "email" ADD "created_at" date`);
    await queryRunner.query(
      `ALTER TABLE "email" ALTER COLUMN "email" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "email" DROP CONSTRAINT "PK_1e7ed8734ee054ef18002e29b1c"`,
    );
  }
}
