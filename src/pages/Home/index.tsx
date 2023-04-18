import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  StepBackwardOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Steps } from 'antd';

import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const;
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <StepBackwardOutlined />
      </div>
      <Steps
        items={[
          {
            title: 'Login',
            status: 'finish',
            icon: <UserOutlined />,
          },
          {
            title: 'Verification',
            status: 'finish',
            icon: <SolutionOutlined />,
          },
          {
            title: 'Pay',
            status: 'process',
            icon: <LoadingOutlined />,
          },
          {
            title: 'Done',
            status: 'wait',
            icon: <SmileOutlined />,
          },
        ]}
      />
    </PageContainer>
  );
};

export default HomePage;
