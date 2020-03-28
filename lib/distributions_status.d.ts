import { DistributionsApi } from "./api_distributions";
/**
 * The model of a Distribution Status method response
 */
export declare type DistributionStatusResponse = {
    reply: {
        status: string;
    };
};
/**
 * Check the status of the installation package.
 */
export declare type DistributionStatus = (
/**
 * String representing the installation package ID.
 */
distributionId: string) => Promise<DistributionStatusResponse>;
/**
 * Check the status of the installation package.
 * @param distributionId String representing the installation package ID.
 */
export declare function distributionStatus(this: DistributionsApi, distributionId: string): Promise<DistributionStatusResponse>;
