import React, { useEffect, useState } from "react";
import { Flowchart, FormWrapper } from '@ant-design/charts';
import { Input } from "antd";
import './index.less';


const InputComponent = (props: any) => {
  const { config, plugin = {} } = props;
  const { placeholder, disabled } = config;
  const { updateNode } = plugin;
  const [label, setLabel] = useState(config?.label);

  const onLabelChange = async (e: any) => {
    setLabel(e.target.value);
    updateNode({
      label: e.target.value,
      value: e.target.value
    });
  };

  useEffect(() => {
    setLabel(config?.label);
  }, [config]);

  return (
    <div style={{ padding: 12 }}>
      <label>标签: </label>
      <Input value={label} onChange={onLabelChange} placeholder={placeholder} disabled={disabled} />
    </div>
  );
};

const RenameService = (props: any) => {
  return (
    <FormWrapper {...props}>
      {(config, plugin) => <InputComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};

export const CanvasService = () => {
  return <p style={{ textAlign: 'center' }}>主画布</p>;
};

const formSchemaService = async (args: any) => {
  const { targetType } = args;
  const isGroup = args.targetData?.isGroup;
  const nodeSchema = {
    tabs: [
      {
        name: '设置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '节点名',
                name: '自定义form',
                shape: 'rename-service',
                placeholder: '节点名称',
              },
            ],
          },
        ],
      },
    ],
  };

  if (isGroup) {
    // TODO
  }

  if (targetType === 'node') {
    return nodeSchema;
  }

  if (targetType === 'edge') {
    // TODO
  }

  return {
    tabs: [
      {
        name: '设置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: 'nihao',
                name: 'canvas-service',
                shape: 'canvas-service',
              },
            ],
          },
        ],
      },
    ],
  };
};
const controlMapService = (controlMap: any) => {
  controlMap.set('rename-service', RenameService);
  controlMap.set('canvas-service', CanvasService);
  return controlMap;
};

const GraphPage: React.FC = () => {


  return <div style={{ height: 600 }}>
    <Flowchart
      onSave={(d) => {
        console.log(d, JSON.stringify(d));
      }}
      toolbarPanelProps={{
        position: {
          top: 0,
          left: 0,
          right: 0,
        },
      }}
      scaleToolbarPanelProps={{
        layout: 'horizontal',
        position: {
          right: 0,
          top: -40,
        },
        style: {
          width: 150,
          height: 39,
          left: 'auto',
          background: 'transparent',
        },
      }}
      canvasProps={{
        position: {
          top: 40,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
      nodePanelProps={{
        position: { width: 160, top: 40, bottom: 0, left: 0 },
      }}
      detailPanelProps={{
        position: { width: 250, top: 40, bottom: 0, right: 0 },
        controlMapService,
        formSchemaService
      }}
    />
  </div>
}

export default GraphPage