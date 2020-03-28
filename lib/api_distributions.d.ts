import { XdrSession } from './http2client';
import { GeneralXdrError, XdrError } from './xdrerror';
import { CreateDistribution } from './distributions_create';
import { DistributionStatus } from './distributions_status';
import { DistributionUrl } from './distributions_url';
export declare const getDistributionVersionPath: string;
export declare const createDistributionPath: string;
export declare const getDistributionStatusPath: string;
export declare const getDistributionUrlPath: string;
export declare type DistributionsApi = {
    /**
     * xdr session object
     */
    session: XdrSession;
    /**
     * Create an installation package. This is an async call that returns the
     * distribution ID, it does not mean that the creation succeeded. To confirm
     * the package has been created, check the status of the distribution by
     * running the Get Distribution Status API.
     */
    create: CreateDistribution;
    /**
     * Check the status of the installation package.
     */
    status: DistributionStatus;
    /**
     * Get the distribution URL for downloading the installation package.
     */
    url: DistributionUrl;
};
export declare function createDistributionsApi(sess: XdrSession): DistributionsApi;
export declare type DistributionsApiErr = GeneralXdrError;
export declare function distributionsApiErrBldr(data: any, statusCode: number): XdrError<DistributionsApiErr>;
