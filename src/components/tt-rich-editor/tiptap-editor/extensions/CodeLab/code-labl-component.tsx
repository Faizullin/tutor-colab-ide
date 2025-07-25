import { Project } from '@/generated/prisma';
import { NodeViewProps, NodeViewWrapper } from '@tiptap/react';
import { FormattedMessage } from 'react-intl';

export interface ProjectData {
  id: Project['id'];
  name: Project['name'];
  slug: Project['slug'];
  description: Project['description'];
}

export const CodeLabComponent = ({ node }: NodeViewProps) => {
  const obj = node.attrs.obj as ProjectData | null;

  return (
    <NodeViewWrapper
      as="div"
      className="tiptap-codelab-block border rounded p-4 bg-muted"
      data-codelab-id={obj?.id || ''}
    >
      {
        obj ? (
          <div>
            <h3 className="text-lg font-semibold">{obj.name}</h3>
            <p className="text-sm text-muted-foreground">{obj.description}</p>
            <a href={`/editor/${obj.slug}`} className="text-blue-500 hover:underline">
              <FormattedMessage id="view_project" defaultMessage="View Project" />
            </a>
          </div>
        ) : (
          <span className="text-red-500">
            <FormattedMessage id="no_codelab_data" defaultMessage="No CodeLab data available" />
          </span>
        )
      }
    </NodeViewWrapper>
  );
};
