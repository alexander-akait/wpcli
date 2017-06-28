import path from "path";
import test from "ava"; // eslint-disable-line node/no-unpublished-import
import wpCli from "../index";

const fixturesDir = path.resolve(__dirname, "fixtures");

test("should execute successfully", async t => {
    const result = await wpCli(path.join(fixturesDir, "./wp-cli.phar"));

    t.true(result.code === 0);
    t.regex(result.stdout, /WP-CLI/);
    t.true(result.stderr.length === 0);
});

test("should execute custom args successfully", async t => {
    const result = await wpCli(path.join(fixturesDir, "./wp-cli.phar"), [
        "--help"
    ]);

    t.true(result.code === 0);
    t.regex(result.stdout, /Manage\sWordPress\sthrough\sthe\scommand-line\./);
    t.true(result.stderr.length === 0);
});

test("should execute custom args successfully and options", async t => {
    const result = await wpCli("./wp-cli.phar", ["--help"], {
        cwd: fixturesDir
    });

    t.true(result.code === 0);
    t.regex(result.stdout, /Manage\sWordPress\sthrough\sthe\scommand-line\./);
    t.true(result.stderr.length === 0);
});

test("should execute failed if not found bin", t => t.throws(wpCli()));

test("should execute failed with unknown command", t =>
    t.throws(wpCli(path.join(fixturesDir, "./wp-cli.phar"), ["unknown"])));

test("should execute failed and catching", t =>
    t.throws(
        wpCli(path.join(fixturesDir, "./wp-cli.phar"), [
            "unknown"
        ]).catch(error => {
            t.true(error.code === 1);
            t.true(error.stdout.length === 0);
            t.regex(error.stderr, /Error/);

            throw error;
        })
    ));
