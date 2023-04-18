// 运行时配置
import { RunTimeLayoutConfig } from 'umi';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    menu: {
      locale: false,
    },
    menuRender: false,
    // menuFooterRender:()=><div>123</div>,
    // pure:true,
    // links:[<a key="1" href="ant.design"> 访问官网 </a>,<a key="2" href="help.ant.design"> 帮助 </a>],
    // menuExtraRender:()=><span>sssssss</span>,
    actionsRender: () => [],
    headerRender: false,
  };
};
