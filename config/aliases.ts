import path from 'path';
import fs from 'fs';

const getTsConfigPaths = () => {
    const tsConfig = JSON.parse(
        fs.readFileSync('./tsconfig.app.json', 'utf-8')
    );
    return tsConfig.compilerOptions.paths;
};

export const getViteAliases = () => {
    const tsPaths = getTsConfigPaths();

    return Object.entries(tsPaths).reduce((aliases, [alias, [pathValue]]) => {
        // Eliminar el /* del alias y del path
        const cleanAlias = alias.replace('/*', '');
        const cleanPath = pathValue.replace('/*', '');

        aliases[cleanAlias] = path.resolve(__dirname, '..', cleanPath);
        return aliases;
    }, {} as Record<string, string>);
};