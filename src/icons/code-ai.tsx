"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 8l-4 4l4 4"}],["path",{"d":"M17 8l3.111 3.111"}],["path",{"d":"M14 4l-2.175 8.7"}],["path",{"d":"M14 21v-4a2 2 0 1 1 4 0v4"}],["path",{"d":"M14 19h4"}],["path",{"d":"M21 15v6"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[5,12],"d":[-1.8,0]},{"fx":"nudge","n":[1,2,3,4,5],"o":[16.41,12.5],"d":[1.8,0]}];

export const CodeAiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CodeAiIcon.displayName = "CodeAiIcon";
