import React from "react"
import { CodePanelWrapper, CodeBlock, CodeBlockWrapper } from "./HeroElements"
import { monokaiSublime } from "react-code-blocks";

const LeftPanel = () => {

    const code = `
        const mennoJager = {
            firstName: "Menno",
            lastName: "Jager",
            contact: "menno.c.jager@gmail.com",
            dob: 799081200,
            location: "Helsinki, FI"
        };
    `


    const language = "js";

  return (
    <CodePanelWrapper>
        <CodeBlockWrapper>
            <CodeBlock
                language={language}
                text={code}
                showLineNumbers={false}
                theme={monokaiSublime}
            />
        </CodeBlockWrapper>
    </CodePanelWrapper>
  )
}

export default LeftPanel