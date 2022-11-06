
import {useEffect, useState} from 'react';
import {web3, societyDaoContract} from "../../utils/contracts.ts";
import {Modal,Typography} from 'antd'
import {FlagFilled } from "@ant-design/icons";
import Guest from '../Guest'
import 'antd/dist/antd.css';
import './index.css';

import {
  Button,
  DatePicker,
  Input,
  TimePicker,

} from 'antd';


function App(){

    const [account, setAccount] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contex, setContex] = useState('')
    const [daytime,setDaytime] = useState('')
    const [sectime,setSectime] = useState('')
  
    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const onDayChange = (_, dateString) => {
      setDaytime(dateString)

    };
  
    const onSecChange = (_,timeString) => {
      setSectime(timeString)
    }; 
  
    const submit=async()=>{
      if(daytime===''||sectime===''){
        alert('you have not choose the date!')
        return;
      }
      if(contex===''){
        alert('you have not written the proposal!')
        return;
      }
      var temp=daytime+' '+sectime
      const d = new Date(temp)
     // console.log(d.getTime()) unix
      const end=d.getTime()
      var now=new Date()
      const u_now=now.getTime()
      console.log(end)
     
      if(u_now>=end){
        alert('the end time is not available!')
        return;
      }
      const duration = end - u_now
      
      try{
        const res =  await societyDaoContract.methods.initiate(contex,u_now,duration).send({
          from: account,
          
        })
        if(res===false){
            alert('you have not enough points')
            return
          }
          else
            alert('you have already publish it on eth')
      }catch(e){
        alert(e.message)
      }
      setIsModalOpen(false);
      }
  
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

    

    if(account===''){
        return (
            <Guest/>
        )
    }

    else{
        return(
            <div className="site-input-group-wrapper">
              <Typography >
              <Typography.Title >你可以在发起议案</Typography.Title>
              <Typography.Title level={2}>注意：</Typography.Title>  
              <Typography.Paragraph >1.每次发起议案需要消耗500积分,确保你有足够的积分;</Typography.Paragraph> 
              <Typography.Paragraph>2.发起人同样可以对发起的议案进行投票,每次投票消耗100积分;</Typography.Paragraph> 
              <Typography.Paragraph>3.议案到达截止时间时,若同意票数大于反对票数会通过,并且发起人会获得所有投票者的积分(不包括发起投票消耗的积分);</Typography.Paragraph>
              <Typography.Paragraph>4.发起议案可以自己选择结束时间,但结束时间不能小于当前时间;</Typography.Paragraph>
              <Typography.Paragraph>5.成功发起三次议案后可以领取纪念品,请发表有意义的议案吧~</Typography.Paragraph>
              </Typography>
        <Button onClick={showModal} icon={<FlagFilled />} size='large'>
        发起议案
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
              maxLength="500" placeholder='请输入提案内容,限500字'
            />
    
     <br/>
      <Input.Group compact>
        <DatePicker
          style={{
            width: '50%',
          }}
          onChange={onDayChange}
        />
      </Input.Group>
      <br/>
  
      <TimePicker allowClear onChange={onSecChange}>
      </TimePicker>
      </Modal>
            
    </div>
            
            
        )
    }
    
    
}

export default App