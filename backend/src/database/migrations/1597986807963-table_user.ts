import {MigrationInterface, QueryRunner} from "typeorm";

export class tableUser1597986807963 implements MigrationInterface {
    name = 'tableUser1597986807963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "usuario" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "estado" character varying(8) NOT NULL DEFAULT 'ACTIVO', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_0790a401b9d234fa921e9aa1777" UNIQUE ("usuario"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
