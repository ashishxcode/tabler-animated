"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 7l5 5l-5 5"}],["path",{"d":"M13 17l6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[7.5,12],"a":0.08},{"fx":"pop","n":[1],"o":[16,17],"a":0.22,"dl":0.1}];

export const PromptIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PromptIcon.displayName = "PromptIcon";
