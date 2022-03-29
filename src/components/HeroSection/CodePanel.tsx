import { CodePanelWrapper, CodeBlock, CodeBlockWrapper } from "./HeroElements";
import { monokaiSublime } from "react-code-blocks";

const LeftPanel = () => {

    const code = `
        const mennoJager = {
            firstName: "Menno",
            lastName: "Jager",
            contact: {
                email: "menno.c.jager@gmail.com",
                phone: "+358 45327 1550"
            }
            dob: 799081200,
            nationality: "The Netherlands",
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