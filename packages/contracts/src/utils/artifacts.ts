import { ContractArtifact } from '@0xproject/sol-compiler';

import * as DummyERC20Token from '../artifacts/DummyERC20Token.json';
import * as DummyERC721Receiver from '../artifacts/DummyERC721Receiver.json';
import * as DummyERC721Token from '../artifacts/DummyERC721Token.json';
import * as ERC20Proxy from '../artifacts/ERC20Proxy.json';
import * as ERC721Proxy from '../artifacts/ERC721Proxy.json';
import * as Exchange from '../artifacts/Exchange.json';
import * as MixinAuthorizable from '../artifacts/MixinAuthorizable.json';
import * as MultiSigWallet from '../artifacts/MultiSigWallet.json';
import * as MultiSigWalletWithTimeLock from '../artifacts/MultiSigWalletWithTimeLock.json';
import * as MultiSigWalletWithTimeLockExceptRemoveAuthorizedAddress from '../artifacts/MultiSigWalletWithTimeLockExceptRemoveAuthorizedAddress.json';
import * as TestAssetProxyDispatcher from '../artifacts/TestAssetProxyDispatcher.json';
import * as TestLibAssetProxyDecoder from '../artifacts/TestLibAssetProxyDecoder.json';
import * as TestLibBytes from '../artifacts/TestLibBytes.json';
import * as TestLibMem from '../artifacts/TestLibMem.json';
import * as TestLibs from '../artifacts/TestLibs.json';
import * as TestSignatureValidator from '../artifacts/TestSignatureValidator.json';
import * as TokenRegistry from '../artifacts/TokenRegistry.json';
import * as EtherToken from '../artifacts/WETH9.json';
import * as ZRX from '../artifacts/ZRXToken.json';

export const artifacts = {
    DummyERC20Token: (DummyERC20Token as any) as ContractArtifact,
    DummyERC721Receiver: (DummyERC721Receiver as any) as ContractArtifact,
    DummyERC721Token: (DummyERC721Token as any) as ContractArtifact,
    ERC20Proxy: (ERC20Proxy as any) as ContractArtifact,
    ERC721Proxy: (ERC721Proxy as any) as ContractArtifact,
    Exchange: (Exchange as any) as ContractArtifact,
    EtherToken: (EtherToken as any) as ContractArtifact,
    MixinAuthorizable: (MixinAuthorizable as any) as ContractArtifact,
    MultiSigWallet: (MultiSigWallet as any) as ContractArtifact,
    MultiSigWalletWithTimeLock: (MultiSigWalletWithTimeLock as any) as ContractArtifact,
    MultiSigWalletWithTimeLockExceptRemoveAuthorizedAddress: (MultiSigWalletWithTimeLockExceptRemoveAuthorizedAddress as any) as ContractArtifact,
    TestAssetProxyDispatcher: (TestAssetProxyDispatcher as any) as ContractArtifact,
    TestLibAssetProxyDecoder: (TestLibAssetProxyDecoder as any) as ContractArtifact,
    TestLibBytes: (TestLibBytes as any) as ContractArtifact,
    TestLibMem: (TestLibMem as any) as ContractArtifact,
    TestLibs: (TestLibs as any) as ContractArtifact,
    TestSignatureValidator: (TestSignatureValidator as any) as ContractArtifact,
    TokenRegistry: (TokenRegistry as any) as ContractArtifact,
    ZRX: (ZRX as any) as ContractArtifact,
};
