import path from 'path';
import fs from 'fs';
import * as humps from 'humps'; // 이 녀석 esm 지원안함

const pascalize = humps.default.pascalize;

const ICONS_DIR = '/src/assets/icons';
const EXPORT_DIR = '/src/components/Icons';

const createIconFileTemplate = (componentName, fileName) =>
  `export { ReactComponent as ${componentName} } from '${path.join(
    ICONS_DIR,
    fileName
  )}';`;

const createIconStoryTemplate = (
  name
) => `import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ${name} } from '..';

export default {
  title: 'Icons/${name}',
  component: ${name},
  args: {
    width: '32px',
    height: '32px',
    color: 'black',
  },
} as ComponentMeta<typeof ${name}>;

const Template: ComponentStory<typeof ${name}> = (args) => (
  <${name} {...args} />
);

export const Basic = Template.bind({});
`;

const svgIconFiles = fs
  .readdirSync(path.join(process.cwd(), ICONS_DIR))
  .filter((fileName) => /\.svg$/.test(fileName));

const icons = svgIconFiles
  .map((fileName) => {
    const componentName = pascalize(fileName.replace('.svg', ''));
    fs.writeFileSync(
      path.join(
        process.cwd(),
        `${EXPORT_DIR}/stories`,
        `${componentName}.stories.tsx`
      ),
      createIconStoryTemplate(componentName)
    );
    return createIconFileTemplate(componentName, fileName);
  })
  .join('\n');

fs.writeFileSync(path.join(process.cwd(), EXPORT_DIR, 'index.ts'), icons);
