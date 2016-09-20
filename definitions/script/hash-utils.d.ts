import * as q from "q";
import * as stream from "stream";
import Promise = q.Promise;
export declare function generatePackageHashFromDirectory(directoryPath: string, basePath: string): Promise<string>;
export declare function generatePackageManifestFromZip(filePath: string): Promise<PackageManifest>;
export declare function generatePackageManifestFromDirectory(directoryPath: string, basePath: string): Promise<PackageManifest>;
export declare function hashFile(filePath: string): Promise<string>;
export declare function hashStream(readStream: stream.Readable): Promise<string>;
export declare class PackageManifest {
    private _map;
    constructor(map?: Map<string, string>);
    toMap(): Map<string, string>;
    computePackageHash(): Promise<string>;
    serialize(): string;
    static deserialize(serializedContents: string): PackageManifest;
    static normalizePath(filePath: string): string;
    static isIgnored(relativeFilePath: string): boolean;
}
