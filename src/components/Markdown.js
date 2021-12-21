import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReactMarkdown from 'react-markdown'

import React, { memo } from 'react'

const CodeBlock = ({ className, children }) => {
  const language = className ? className.toString().split('-')[1] : ''
  return (
    <SyntaxHighlighter
      language={language}
      style={vs}
      showLineNumbers={true}
      customStyle={{
        maxWidth: '80vw',
      }}
    >
      {children || ''}
    </SyntaxHighlighter>
  )
}

const Markdown = ({ children }) => {
  return <ReactMarkdown children={children} components={{ code: CodeBlock }} />
}

export default memo(Markdown)
