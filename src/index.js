import execa from "execa";

// php wp-cli.phar --info

export default (bin = "./wp-cli.phar", args = ["--version"], options = {}) => {
    args.push("--allow-root");

    return execa(bin, args, options);
};
