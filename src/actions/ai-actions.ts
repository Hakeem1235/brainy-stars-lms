"use server";

import { AI_PROMPTS, PromptKey } from "../lib/prompts";

export async function generateAIResponse(promptKey: PromptKey, variables: Record<string, string>) {
    // MOCK IMPLEMENTATION (No Backend/API)
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate AI "thinking" time

    if (promptKey === "LESSON_PLAN") {
        return `**[AI Generated Lesson Plan]**
### **Title: Understanding Numbers 1-10**
**Direct Aim:** To recognize number symbols and associate quantity.
**Indirect Aim:** Preparation for mathematics.

**Materials:**
- Number Rods
- Sandpaper Numbers

**Presentation Script:**
"Today, we are going to work with numbers. Watch carefully." (Trace the number 1). "This is one."

**Islamic Value:**
"Allah is One (Al-Wahid). Just as we count 1, we remember there is only one God."

**Home Activity:** 
Ask parents to count fruits with the child.`;
    }

    if (promptKey === "OBSERVATION_ASSISTANT") {
        return `**[AI Observation Record]**
**Observation:** Child working with Pink Tower. Repeatedly building it but placing the smallest block at the bottom.
**Interpretation:** Child is exploring dimension but has not yet internalized the sequence (largest to smallest).
**Cause:** Exploratory phase; lack of visual discrimination refinement.
**Next Step:** Re-present the Pink Tower with emphasis on the base cube.
**Islamic Point:** Patience (Sabr) in learning. Every mistake is a step towards perfection.`;
    }

    if (promptKey === "PARENTING_ASSISTANT") {
        return `**[AI Parenting Coach]**
**Montessori Perspective:**
Your child's refusal to wear shoes is likely a need for autonomy. At this age, "I do it myself" is a strong drive.

**Islamic Perspective:**
Prophet Muhammad (PBUH) treated children with respect and gave them choices.

**Action Plan:**
1. Offer two pairs of shoes: "Do you want the red ones or the blue ones?"
2. Allow extra time so they can try putting them on themselves.
3. Be patient and encouraging.`;
    }

    return `**[AI Response]**
I have processed your request using the **${promptKey}** model.
\n
*This is a simulated response to demonstrate the UI/UX. In the real application, this would be a dynamic generation based on your inputs:*\n
\`\`\`json
${JSON.stringify(variables, null, 2)}
\`\`\`
`;
}
