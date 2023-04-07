import { html } from 'lit';
import '../src/project-2.js';

export default {
  title: 'Project2',
  component: 'project-2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project-2
      style="--project-2-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project-2>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
