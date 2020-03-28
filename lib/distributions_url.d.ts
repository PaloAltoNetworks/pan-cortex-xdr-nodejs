import { DistributionsApi } from "./api_distributions";
declare type PackageType = 'sh' | 'rpm' | 'deb' | 'pkg' | 'x86' | 'x64';
/**
 * The model of a Distribution Url method response
 */
export declare type DistributionUrlResponse = {
    reply: {
        distribution_url: string;
    };
};
/**
 * Get the distribution URL for downloading the installation package.
 */
export declare type DistributionUrl = (
/**
 * string representing the installation package ID.
 */
distributionId: string, 
/**
 * string representing the type of installation package
 */
packageType: PackageType) => Promise<DistributionUrlResponse>;
/**
 * Get the distribution URL for downloading the installation package.
 * @param distributionId string representing the installation package ID.
 * @param packageType A string representing the type of installation package
 */
export declare function distributionUrl(this: DistributionsApi, distributionId: string, packageType: PackageType): Promise<DistributionUrlResponse>;
export {};
