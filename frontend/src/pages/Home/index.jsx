import { Divider, Typography } from 'antd';
//import React from 'react';
const { Title, Paragraph, Text } = Typography;
const blockContent = `● (Bonus)发起提案并通过3次的学生,可以领取社团颁发的纪念品`;
const App = () => (
  <Typography>
    <Title>关于我们</Title>
    <Paragraph>
      本DAPP为由<Text strong mark>shra</Text>开发的去中心化学生社团组织治理应用，所有数据均储存在区块链上。 
    </Paragraph>

    <Title level={2}>我们的优势</Title>
    <Paragraph>
	➢去中心化：避免垄断，点对点交易，去代理
	</Paragraph>
	<Paragraph>➢数据公开：无暗箱操作，平等性，开放生态体系</Paragraph>
	<Paragraph>➢可信：数据永久可靠，记录可信</Paragraph>
    

    <Divider />

    <Title>本DAPP功能</Title>
    <Paragraph>
	● 每个学生初始可以拥有或领取一些通证积分（ERC20）。
    </Paragraph>
    <Paragraph>
	● 每个学生可以在应用中可以： 
    </Paragraph>
	<Paragraph>
	1、使用一定数量通证积分，发起关于该社团进行活动或制定规则的提案（Proposal）。 
    </Paragraph>
	<Paragraph>2、提案发起后一定支出时间内，使用一定数量通证积分可以对提案进行投票（赞成或反对，限制投票次数），投票行为被记录到区块链上。</Paragraph>
	<Paragraph>3、提案投票时间截止后，赞成数大于反对数的提案通过，提案发起者作为贡献者可以领取一定的积分奖励。</Paragraph>
	<Paragraph>4、查看个人账户信息。</Paragraph>
    <Paragraph>
      <blockquote>{blockContent}</blockquote>
    </Paragraph>

   
  </Typography>
);
export default App;