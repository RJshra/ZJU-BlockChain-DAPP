import 'antd/dist/antd.css';
import { Button,Space,Table,Tag } from 'antd';
import {SyncOutlined , CheckOutlined,CloseOutlined} from "@ant-design/icons";
import {useEffect, useState} from 'react';
import {web3, societyDaoContract} from "../../utils/contracts.ts";


var data=[];

export default function Tables(){

  const columns = [
    {
      title: '提案内容',
      dataIndex: 'content',
      width: '20%',
    },
    {
      title: '起止时间',
      dataIndex: 'time',
      width: '20%',
    },
    {
      title:'是否截止',
      dataIndex:'end',
      width:'%5',
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
          text:'已截止',
          value:true,
        },
        {
          text:'未截止',
          value:false,
        }
      ],
      onFilter:(value,record)=>record.end===value, 
    },
    {
      title:'同意人数',
      dataIndex:'agree',
      width:'%10',
    },
    {
      title:'反对人数',
      dataIndex:'reject',
      width:'%10',
    },
    {
      title:'是否通过',
      dataIndex:'pass',
      width:'%5',
      render: (_, record) => {
        if(record.end===false)
          return(
            <></>
        )
      
        let pass=record.pass
        let color=pass===false?'black':'red';
        let value=pass===false?'No':'Yes';
          return (
            <Tag color={color} >
            {value}
          </Tag>
          );

      },
      filters:[
        {
          text:'Pass',
          value:true,
        },
        {
          text:'Fail',
          value:false,
        }
      ],
      onFilter:(value,record)=>record.pass===value,
    },
    {
      title: '操作',
      key: 'action',
      width:'%10',
      render: (_, record) => {
        if(record.end===true)
          return(
            <></>
        )
        return(
        <Space size="middle">
          <Button type="dash" shape='default' icon={<CheckOutlined />}  size="small"
               className='buttom' onClick={()=>{approve(record.key)}}>
                同意
          </Button>
          <Button type="dash" shape='default' icon={<CloseOutlined />}  size="small"
               className='buttom' onClick={()=>{reject(record.key)}}>
                反对
          </Button>
        </Space>)
      },
  
    },
  ];
  
  
  const [account, setAccount] = useState('')
  const [,setUpdate] = useState(null)

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

  const reject=async(key)=>{
    try {
      await societyDaoContract.methods.vote(key,false).send({
          from:account,
          gas: '100000',
      })

  } catch (e) {
      alert(e.message)
  }
  
  }

  const approve=async(key)=>{
    try {
      await societyDaoContract.methods.vote(key,true).send({
          from:account,
          gas: '100000',
      })
  } catch (e) {
    alert(e.message)
  }
  }



  const search=async()=>{
    
    data.length=0;
    try {
      
        await societyDaoContract.methods.updateOnePerson().send({
          from:account,

        })
        const res= await societyDaoContract.methods.return_person_proposals().call({
          from:account
        })
        data=[...data]
        for(let i=0;i<res.length;i++){
        
        var start_date=new Date(Number(res[i][2]));
        start_date=start_date.toLocaleString();
        var end_date=new Date(Number(res[i][2])+Number(res[i][3]));
        end_date=end_date.toLocaleString();

        data.push({
          key: i.toString(),
          content:res[i][1],
          time:start_date.toString()+' '+end_date.toString(),
          end: res[i][4],
          agree:res[i][6],
          reject:res[i][7],
          pass:res[i][5]
        })
      }
      setUpdate(data)
      //console.log(data)
  } catch (e) {
      alert(e.message)
  }
  }

  return (
  <div>
    <Table scroll="y"  columns={columns} dataSource={data} />
    <Button icon={<SyncOutlined />}
    onClick={search}>点击更新</Button>
  </div>
      
  );
  
}