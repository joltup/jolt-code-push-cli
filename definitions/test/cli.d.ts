import Q = require("q");
import Promise = Q.Promise;
import * as codePush from "code-push/script/types";
export declare class SdkStub {
    getAccountInfo(): Promise<codePush.Account>;
    addAccessKey(name: string, ttl: number): Promise<codePush.AccessKey>;
    patchAccessKey(oldName: string, newName?: string, newTtl?: number): Promise<codePush.AccessKey>;
    addApp(name: string): Promise<codePush.App>;
    addCollaborator(name: string, email: string): Promise<void>;
    addDeployment(appId: string, name: string): Promise<codePush.Deployment>;
    clearDeploymentHistory(appId: string, deployment: string): Promise<void>;
    getAccessKeys(): Promise<codePush.AccessKey[]>;
    getSessions(): Promise<codePush.Session[]>;
    getApps(): Promise<codePush.App[]>;
    getDeployments(appId: string): Promise<codePush.Deployment[]>;
    getDeploymentHistory(appId: string, deploymentId: string): Promise<codePush.Package[]>;
    getDeploymentMetrics(appId: string, deploymentId: string): Promise<any>;
    getCollaborators(app: codePush.App): Promise<any>;
    patchRelease(appName: string, deployment: string, label: string, updateMetaData: codePush.PackageInfo): Promise<void>;
    promote(appName: string, sourceDeployment: string, destinationDeployment: string, updateMetaData: codePush.PackageInfo): Promise<void>;
    release(appId: string, deploymentId: string): Promise<string>;
    removeAccessKey(accessKeyId: string): Promise<void>;
    removeApp(appId: string): Promise<void>;
    removeCollaborator(name: string, email: string): Promise<void>;
    removeDeployment(appId: string, deployment: string): Promise<void>;
    removeSession(createdBy: string): Promise<void>;
    renameApp(app: codePush.App): Promise<void>;
    rollback(appName: string, deployment: string, targetRelease: string): Promise<void>;
    transferApp(app: codePush.App): Promise<void>;
    renameDeployment(appId: string, deployment: codePush.Deployment): Promise<void>;
}