import * as chai from 'chai';
import {chaiSetup} from './utils/chai_setup';
import {web3Factory} from './utils/web3_factory';
import {ZeroEx} from '../src';
import {ProxyWrapper} from '../src/contract_wrappers/proxy_wrapper';

chaiSetup.configure();
const expect = chai.expect;

describe('ProxyWrapper', () => {
    let zeroEx: ZeroEx;
    before(async () => {
        const web3 = web3Factory.create();
        zeroEx = new ZeroEx(web3.currentProvider);
    });
    describe('#isAuthorizedAsync', () => {
        it('should return false if the address is not authorized', async () => {
            const proxyWrapper = (zeroEx as any)._proxyWrapper as ProxyWrapper;
            const isAuthorized = await proxyWrapper.isAuthorizedAsync(ZeroEx.NULL_ADDRESS);
            expect(isAuthorized).to.be.false();
        });
    });
});