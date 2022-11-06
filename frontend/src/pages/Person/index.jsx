import {Button,Typography,Divider,Table,Modal,Input,Tag} from 'antd';
import {DollarCircleFilled,GiftOutlined} from "@ant-design/icons";
import {useEffect, useState} from 'react';
import {web3, ERC20Contract,societyDaoContract,ERC721Contract} from "../../utils/contracts.ts";
import './index.css';
import Guest from '../Guest'

const { Title  } = Typography;


var data=[];
function App(){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contex, setContex] = useState('')
  
    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

  
    const submit=async()=>{
      
      if(contex===''){
        alert('you have not written the name!')
        return;
      }
      
      try{
       await societyDaoContract.methods.recieveBonus(contex).send({
          from: account,
        })
      }catch(e){
        alert(e.message)
      }
      setIsModalOpen(false);
      }

const colums=[
    {
        title: 'bonus ID',
        dataIndex: 'bonusid',
        width: '20%',
    },
    {
        title: 'bonus name',
        dataIndex: 'name',
        width: '30%',
    },
    {
        title:'status',
        dataIndex: 'status',
        width: '20%',
        render: (text, _) => {
            let color=text===false?'black':'red';
            let value=text===false?'No':'Yes';
              return (
                <Tag color={color} >
                {value}
              </Tag>
              );
  
        },
        filters:[
          {
            text:'已领取',
            value:true,
          },
          {
            text:'未领取',
            value:false,
          }
        ],
        onFilter:(value,record)=>record.status===value, 
    },
    {
        title:'action',
        dataIndex: 'action',
        width: '20%',
        render: (_, record) => {
            if(record.status===true)
            return(
                <></>
            )
            return(<div>
                <Button onClick={showModal} icon={<GiftOutlined />} size='large'>
                 领取奖品
                </Button>
                <Modal title="发起议案" open={isModalOpen} onOk={submit} onCancel={handleCancel}>
                <Input.TextArea 
                    showCount="true" onChange={(e)=>setContex(e.target.value)}
                      style={{
                        width: 'calc(100% - 200px)',
                      }}
                      allowClear='true'
                      autoSize={{
                        minRows:4,
                        maxRows:10
                      }}
                      maxLength="100" placeholder='请输入礼品名称,限100字'
                    />
                    </Modal>
                    </div>
            )
    }
},
]
    const [update, setUpdate] = useState('')
    const [account, setAccount] = useState('')
    const [accountBalance, setAccountBalance] = useState(0)
    const [bonus,setBonus] = useState(0)

    useEffect(() => {
        // 初始化检查用户是否已经连接钱包
        // 查看window对象里是否存在ethereum（metamask安装后注入的）对象
        const initCheckAccounts = async () => {
            const {ethereum} = window;
            if (Boolean(ethereum && ethereum.isMetaMask)) {
                const accounts = await web3.eth.getAccounts()
                if(accounts && accounts.length) {
                    setAccount(accounts[0])
                }
            }
        }

        initCheckAccounts()
    }, [])

    useEffect(() => {
        const getAccountInfo = async () => {
        
            if (ERC20Contract) {
                const ab = await ERC20Contract.methods.balanceOf(account).call()
                setAccountBalance(ab)
            
            } else {
                alert('Contract not exists.')
            }
        }

        if(account !== '') {
            getAccountInfo()
        }
    }, [account])

    useEffect(() => {
        const getBonusInfo = async () => {
        
            if (ERC721Contract) {
                const ab = await ERC721Contract.methods.balanceOf(account).call()
                setBonus(ab)
            
            } else {
                alert('Contract not exists.')
            }
        }

        if(account !== '') {
            getBonusInfo()
        }
    }, [account])

    const gainPoints = async () => {
        if(account === '') {
            alert('You have not connected wallet yet.')
            return
        }

        try {
            await societyDaoContract.methods.help_gain_points().send({
               from: account
            })
            const ab = await ERC20Contract.methods.balanceOf(account).call()
            setAccountBalance(ab)
            alert('You have gained the points.')
        } catch (error) {
            alert(error.message)
        }

    }

    const search=async()=>{
    
        data.length=0;
        try {
            const balance = await ERC721Contract.methods.balanceOf(account).call()
                setBonus(balance)
            const recieve_counts = await societyDaoContract.methods.getBonusCount().call()
            const resInt= await ERC721Contract.methods.returnTokenId().call()
            const resURI= await ERC721Contract.methods.returnURI().call()
            data=[...data]
            for(let i=0;i<resInt.length;i++){
            data.push({
              key: i.toString(),
              bonusid: resInt[i],
              name:resURI[i],
              status:true
            })
          }
          for(let i=0;i<recieve_counts;i++){
            data.push({
              key: (i+resInt.length).toString(),
              bonusid: '',
              name:'',
              status:false,

            })
          }
          setUpdate(data)
          
      } catch (e) {
          alert(e.message)
      }
      }

    if(account===''){
        return (
            <Guest/>
        )
    }

    else{
        return(
            <Typography>
                <Title className='text-center' level={2}>
                    当前用户信息
                </Title>
                <Divider />
                <Title level={3}>
                    用户地址：{account}
                </Title>
                <br></br>
                <Title level={3}>
                    可用积分：{accountBalance}
                </Title>
                {console.log(data)}
                <Title level={3}>
                    {bonus===0||bonus==='0'?'当前用户暂未获得bonus,请多发起高质量提案吧':  `恭喜您拥有bonus: ${bonus} 请继续发起高质量提案吧`}
                </Title>
                <br></br>
                <Button type="dash" shape='default' size="large"
                 className='buttom' onClick={search}>
                    点击刷新表格
                </Button>
                <br></br>
                <Table scroll="y"  columns={colums} dataSource={data}/>
                <br></br>
                <Button type="dash" shape='default' icon={<DollarCircleFilled/>}  size="large"
                 className='buttom' onClick={gainPoints}>
                    点击领取积分(限1次)
                </Button>
            </Typography>
            
        )
    }
    
    
}

export default App