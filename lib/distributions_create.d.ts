import { DistributionsApi } from "./api_distributions";
/**
 * shape of an Standalone Package Type
 */
declare type PackageStandalone = {
    name: string;
    package_type: 'standalone';
    platform: 'windows' | 'linux' | 'macos' | 'android';
    agent_version?: string;
};
/**
 * shape of an Upgrade Package Type
 */
declare type PackageUpgrade = {
    name: string;
    package_type: 'upgrade';
} & ({
    windows_version: string;
} | {
    linux_version: string;
} | {
    macos_version: string;
});
/**
 * The model of a Create Distrbution method response
 */
export declare type CreateDistributionResponse = {
    reply: {
        distribution_id: string;
    };
};
/**
 * Create an installation package. This is an async call that returns the
 * distribution ID, it does not mean that the creation succeeded. To confirm the
 * package has been created, check the status of the distribution by running the
 * Get Distribution Status API.
 */
export declare type CreateDistribution = (
/**
 * package details
 */
distributon: PackageStandalone | PackageUpgrade) => Promise<CreateDistributionResponse>;
/**
 * Create an installation package. This is an async call that returns the
 * distribution ID, it does not mean that the creation succeeded. To confirm the
 * package has been created, check the status of the distribution by running the
 * Get Distribution Status API.
 * @param distributon package details
 */
export declare function createDistribution(this: DistributionsApi, distributon: PackageStandalone | PackageUpgrade): Promise<CreateDistributionResponse>;
export {};
