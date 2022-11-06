
import 'antd/dist/antd.css';
import img from '../../asset/login.png'
import {Button,Typography} from 'antd';
import {WalletFilled} from "@ant-design/icons";
import './index.css';


const { Title  } = Typography;

const GanacheTestChainId = '0x539' 
const GanacheTestChainName = 'Ganache Test Chain'
const GanacheTestChainRpcUrl = 'http://127.0.0.1:7545'

function App(){
  
    const onClickConnectWallet = async () => {
        // 查看window对象里是否存在ethereum（metamask安装后注入的）对象
        // @ts-ignore
        const {ethereum} = window;
        if (!Boolean(ethereum && ethereum.isMetaMask)) {
            alert('MetaMask is not installed!');
            return
        }

        try {
            // 如果当前小狐狸不在本地链上，切换Metamask到本地测试链
            if (ethereum.chainId !== GanacheTestChainId) {
                const chain = {
                    chainId: GanacheTestChainId, // Chain-ID
                    chainName: GanacheTestChainName, // Chain-Name
                    rpcUrls: [GanacheTestChainRpcUrl], // RPC-URL
                };

                try {
                    // 尝试切换到本地网络
                    await ethereum.request({method: "wallet_switchEthereumChain", params: [{chainId: chain.chainId}]})
                } catch (switchError) {
                    // 如果本地网络没有添加到Metamask中，添加该网络
                    if (switchError.code === 4902) {
                        await ethereum.request({ method: 'wallet_addEthereumChain', params: [chain]
                        });
                    }
                }
            }

            // 小狐狸成功切换网络了，接下来让小狐狸请求用户的授权
            await ethereum.request({method: 'eth_requestAccounts'});
            // 获取小狐狸拿到的授权用户列表
            await ethereum.request({method: 'eth_accounts'});

        } catch (error) {
            alert(error.message)
        }
    }
    return(  
        <div>
            <Typography>
            <img src={img} className="picture" alt="login"></img>
            <br></br>
            <Title className='text-center'>抱歉，您还未登录</Title>
            </Typography>
             <Button type="dash" shape='default' icon={<WalletFilled />}  size="large"
             className='buttom' onClick={onClickConnectWallet}>
              点击连接钱包
             </Button>
        </div>
    
    )
    
}
export default App